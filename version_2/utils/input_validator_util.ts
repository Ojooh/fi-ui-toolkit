import dayjs            from "dayjs";
import isSameOrAfter    from "dayjs/plugin/isSameOrAfter";
import { ENVInterface } from "@v2/types/env_type";

dayjs.extend(isSameOrAfter);

interface FileLike {
    mimetype: string;
    size: number;
}

class InputValidatorUtil {
    private static ENV: ENVInterface;
    
    // Regex patterns
    private static module_name_regex_reg_exp = /^[A-Za-z.'\s/_-]*$/;
    private static module_namey_regex_reg_exp = /^[A-Za-z0-9.'\s,/_\-()&]*$/;
    private static email_regex_reg_exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    private static tel_regex_reg_exp = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    private static pass_regex_reg_exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,}.+$/;
    private static url_regex_reg_exp          = /^(https?:\/\/)?((localhost|[a-zA-Z0-9-_.]+)(:[0-9]{1,5})?)(\/[a-zA-Z0-9-._~:/?#@!$&'()*+,;=%]*)?$/;
    private static text_arear_regex_reg_exp = /^(?=.*[a-zA-Z])[\w\s.,!?'\-()&@$#%*+=:;"<>]*$/;
    private static uuid_regex_reg_exp = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    private static custom_uuid_regex_reg_exp = /^[A-Z0-9]{12}-[A-Z0-9]{12}-[A-Z0-9]{12}-[A-Z0-9]{12}$/;

    public static init(env: ENVInterface): void {
        this.ENV = env;
    }

    // Environment
    public static isProduction(): boolean { return this.ENV?.VITE_MODE === "production"; }
    public static isStaging(): boolean { return this.ENV?.VITE_MODE === "staging"; }

    // Currency type
    public static isFiat(currency_obj: { type?: string } | null | undefined): boolean {
        return currency_obj?.type === "FIAT";
    }
    public static isCrypto(currency_obj: { type?: string } | null | undefined): boolean {
        return currency_obj?.type === "CRYPTO";
    }

    // General validations
    public static isEmpty(input: any): boolean { return input == null || input.toString().trim() === ""; }
    public static isLowerSnakeCase(str: string): boolean { return /^[a-z]+(_[a-z]+)*$/.test(str); }
    public static isValidName(name: string): boolean { return this.module_name_regex_reg_exp.test(name); }
    public static isValidNamey(name: string): boolean { return this.module_namey_regex_reg_exp.test(name); }
    public static isValidEmail(email: string): boolean { return this.email_regex_reg_exp.test(email); }
    public static isValidPhoneNumber(tel: string): boolean { return this.tel_regex_reg_exp.test(tel); }
    public static isValidPassword(password: string): boolean { return this.pass_regex_reg_exp.test(password); }
    public static isDigit(value: any): boolean { return !isNaN(value); }
    public static isValidInteger(value: number): boolean { return Number.isInteger(value) && value > 0; }
    public static isValidFloat(value: number): boolean { return !isNaN(value) && value > 0; }
    public static isBoolean(value: any): boolean { return typeof value === "boolean" || ["1","0"].includes(String(value)); }
    public static isValidLongText(text: string): boolean { return this.text_arear_regex_reg_exp.test(text); }
    public static isValidURLY(url: string): boolean {
        try { 
            new URL(url);
            return true;
        } 
        catch (_) { return false; }
    }

    public static isValidURL(url: string): boolean { return this.url_regex_reg_exp.test(url) && this.isValidURLY(url); }

    // File validations
    public static isValidImage(file: FileLike): boolean { return file?.mimetype.startsWith("image/"); }
    public static isValidDocument(file: FileLike): boolean { return file?.mimetype === "application/pdf"; }
    public static isValidVideo(file: FileLike): boolean { 
        return file?.mimetype.startsWith("video/") || file?.mimetype === "image/gif"; 
    }
    public static isValidImageSize(file: FileLike): boolean { 
        return file?.size <= parseInt(this.ENV?.VITE_IMG_MAX_SIZE || "1500000", 10); 
    }
    public static isValidVideoSize(file: FileLike): boolean { 
        return file?.size <= parseInt(this.ENV?.VITE_VIDEO_MAX_SIZE || "1500000", 10); 
    }
    public static isValidDocumentSize(file: FileLike): boolean { 
        return file?.size <= parseInt(this.ENV?.VITE_FILE_MAX_SIZE || "1500000", 10); 
    }

    // UUID validations
    public static isValidUUID(uuid: string): boolean { return this.uuid_regex_reg_exp.test(uuid); }
    public static isValidCustomUUID(uuid: string): boolean { return this.custom_uuid_regex_reg_exp.test(uuid); }

    // Array validations
    public static isArrayUnique<T>(arr: T[]): boolean { return new Set(arr).size === arr.length; }

    // Date validations
    public static isValidFutureDate(date_string: string | Date): boolean {
        const date = dayjs(date_string);
        return date.isValid() && date.isAfter(dayjs());
    }

    // Boolean string
    public static isTruthyString(value: any): boolean {
        return String(value).toLowerCase() === "true" || String(value) === "1";
    }

    // Detect changes in object keys
    public static hasInputChanged( new_input: Record<string, any>, existing_data: Record<string, any>, keys_to_check: string[] ): boolean {
        const normalize = (val: any): any => {
            if (typeof val === "boolean") return val;
            if (val === 1 || val === "1") return true;
            if (val === 0 || val === "0") return false;
            return val;
        };

        for (const key of keys_to_check) {
            if (!(key in new_input)) { continue; } 
            
            const a = normalize(new_input[key]);
            const b = normalize(existing_data[key]);

            if (typeof a === "object" || typeof b === "object") {
                if (JSON.stringify(a) !== JSON.stringify(b)) { return true; }
            } 
            else if (a !== b) { return true; }
        }

        return false;
    }
}

export default InputValidatorUtil
