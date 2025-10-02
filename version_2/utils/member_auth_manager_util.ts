

import LocalStorageManagerUtil      from "./local_storage_manager_util";
import LoggerUtil                   from "./logger_util";
import { MEMBER_DATA_KEYS_FIELD }   from "../enums/constants.enum";

import { 
    CurrentMemberInterface,
    OtherMemberDataInterface }   from "../types/util_type";


class MemberAuthManagerUtil {
    public readonly name = "member_auth_manager_util";
    private member_data_keys: string [];
    private local_storage_manager: LocalStorageManagerUtil;
    private logger: LoggerUtil;

    constructor () {
        this.local_storage_manager  = new LocalStorageManagerUtil();
        this.logger                 = new LoggerUtil({ prefix: this.name, show_timestamp: false});
        this.member_data_keys       = this.local_storage_manager.getData<string[]>(MEMBER_DATA_KEYS_FIELD) ?? [];
    }

    // Method to get current authenticated member
    public getCurrentMember(member_key: string = "CURRENT_MEMBER"): CurrentMemberInterface | null { 
        return this.local_storage_manager.getData<CurrentMemberInterface>(member_key);
    }

    // Method to get member permissions
    public getMemberPermissions (member_perm_key: string = "MEMBER_PERMISSIONS"): string [] { 
        return this.local_storage_manager.getData<string[]>(member_perm_key) || []
    }

    // Method to check if member is logged in
    public isMemberFullyLoggedIn (member_key: string = "CURRENT_MEMBER"): boolean {
        const current_member            = this.getCurrentMember(member_key);
        const is_member                 = current_member && Object.keys(current_member).length > 2;
        const is_fully_authenticated    = current_member?.is_fully_authenticated ?? false;

        if (!is_member) { return false; }

        return is_member && is_fully_authenticated;
    };

    // Method to check if member is logged in
    public isMemberPartiallyLoggedIn (member_key: string = "CURRENT_MEMBER"): boolean {
        const current_member            = this.getCurrentMember(member_key);
        const is_member                 = current_member && Object.keys(current_member).length > 2;
        const is_fully_authenticated    = current_member?.is_fully_authenticated ?? false;

        if (!is_member) { return false; }

        return is_member && !is_fully_authenticated;
    };

    // Method to check if a member has permission to access a module
    public canMemberAccess (permission_name: string, member_perm_key: string = "MEMBER_PERMISSIONS"): boolean {
        const member_permissions = this.getMemberPermissions(member_perm_key);
        return member_permissions.includes(permission_name);
    }

    // Method to set current member data
    public setCurrentMemberData (
        member_key: string,
        current_member: CurrentMemberInterface,
        other_member_data: Record<string, any> = {}
    ): boolean {
        let success = true;
        this.deleteCurrentMemberData();

        // store main member object
        const member_data_set = this.local_storage_manager.setData(member_key, current_member);

        if (!member_data_set) {
            this.logger.error(`Failed to store member data under key: ${member_key}`);
            success = false;
        }

        // store additional member-related data
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

    // ✅ Method to delete member data (main + extras)
    public deleteCurrentMemberData( member_key: string = "CURRENT_MEMBER" ): boolean {
        let success = true;

        // remove main member object
        const member_deleted = this.local_storage_manager.removeData(member_key);

        if (!member_deleted) {
            this.logger.warn(`Failed to remove member data for key: ${member_key}`);
            success = false;
        }

        const member_data_keys = this.local_storage_manager.getData<string[]>(MEMBER_DATA_KEYS_FIELD) || this.member_data_keys;

        // remove extras
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

export default MemberAuthManagerUtil