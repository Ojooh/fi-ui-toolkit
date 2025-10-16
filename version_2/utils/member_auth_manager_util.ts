import LocalStorageManagerUtil from "./local_storage_manager_util";
import LoggerUtil from "./logger_util";
import { MEMBER_DATA_KEYS_FIELD } from "../enums/constants.enum";
import { CurrentMemberInterface } from "../types/util_type";

class MemberAuthManagerUtil {
    private static instance: MemberAuthManagerUtil | null = null; // ✅ Singleton instance

    public readonly name = "member_auth_manager_util";
    private member_data_keys: string[];
    private local_storage_manager: LocalStorageManagerUtil;
    private logger: LoggerUtil;

    // 🔒 Private constructor to prevent direct instantiation
    private constructor() {
        this.local_storage_manager = new LocalStorageManagerUtil();
        this.logger = new LoggerUtil({ prefix: this.name, show_timestamp: false });
        this.member_data_keys = this.local_storage_manager.getData<string[]>(MEMBER_DATA_KEYS_FIELD) ?? [];
    }

    // ✅ Public static method to get the single instance
    public static getInstance(): MemberAuthManagerUtil {
        if (!MemberAuthManagerUtil.instance) {
            MemberAuthManagerUtil.instance = new MemberAuthManagerUtil();
        }
        return MemberAuthManagerUtil.instance;
    }

    // 🔽 Existing methods below remain unchanged 🔽

    public getCurrentMember(member_key: string = "CURRENT_MEMBER"): CurrentMemberInterface | null {
        return this.local_storage_manager.getData<CurrentMemberInterface>(member_key);
    }

    public getMemberPermissions(member_perm_key: string = "MEMBER_PERMISSIONS"): string[] {
        return this.local_storage_manager.getData<string[]>(member_perm_key) || [];
    }

    public isMemberFullyLoggedIn(member_key: string = "CURRENT_MEMBER"): boolean {
        const current_member = this.getCurrentMember(member_key);
        const is_member = current_member && Object.keys(current_member).length > 2;
        const is_fully_authenticated = current_member?.is_fully_authenticated ?? false;

        if (!is_member) return false;

        return is_member && is_fully_authenticated;
    }

    public isMemberPartiallyLoggedIn(member_key: string = "CURRENT_MEMBER"): boolean {
        const current_member = this.getCurrentMember(member_key);
        const is_member = current_member && Object.keys(current_member).length > 2;
        const is_fully_authenticated = current_member?.is_fully_authenticated ?? false;

        if (!is_member) return false;

        return is_member && !is_fully_authenticated;
    }

    public canMemberAccess(permission_name: string, member_perm_key: string = "MEMBER_PERMISSIONS"): boolean {
        const member_permissions = this.getMemberPermissions(member_perm_key);
        return member_permissions.includes(permission_name);
    }

    public setCurrentMemberData(
        member_key: string,
        current_member: CurrentMemberInterface,
        other_member_data: Record<string, any> = {}
    ): boolean {
        let success = true;
        this.deleteCurrentMemberData();

        const member_data_set = this.local_storage_manager.setData(member_key, current_member);

        if (!member_data_set) {
            this.logger.error(`Failed to store member data under key: ${member_key}`);
            success = false;
        }

        for (const [key, value] of Object.entries(other_member_data)) {
            if (!value) continue;

            const result = this.local_storage_manager.setData(key, value);
            if (!result) {
                this.logger.error(`Failed to store additional member data for key: ${key}`);
                success = false;
            }

            this.member_data_keys.push(key);
        }

        this.member_data_keys = Array.from(new Set([...this.member_data_keys, ...Object.keys(other_member_data)]));
        this.local_storage_manager.setData(MEMBER_DATA_KEYS_FIELD, this.member_data_keys);

        return success;
    }

    public deleteCurrentMemberData(member_key: string = "CURRENT_MEMBER"): boolean {
        let success = true;

        const member_deleted = this.local_storage_manager.removeData(member_key);

        if (!member_deleted) {
            this.logger.warn(`Failed to remove member data for key: ${member_key}`);
            success = false;
        }

        const member_data_keys =
            this.local_storage_manager.getData<string[]>(MEMBER_DATA_KEYS_FIELD) || this.member_data_keys;

        for (const key of member_data_keys) {
            const result = this.local_storage_manager.removeData(key);
            if (!result) {
                this.logger.warn(`Failed to remove extra member data for key: ${key}`);
                success = false;
            }
        }

        this.local_storage_manager.removeData(MEMBER_DATA_KEYS_FIELD);
        this.member_data_keys = [];

        return success;
    }
}

export default MemberAuthManagerUtil;
