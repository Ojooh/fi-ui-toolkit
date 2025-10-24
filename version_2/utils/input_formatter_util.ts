import dayjs from "dayjs";
import { CountLookupItemInterface } from "../types/util_type";
import SVGIcons from "../resources/svg_icon_resource";
import RenderHtmlUtil from "./render_html_util";

class InputTransformerUtil {
    // Lookup for number formatting suffixes
    private static count_lookup: CountLookupItemInterface[] = [
        { value: 1, symbol: "" },
        { value: 1000, symbol: "K" },
        { value: 1000000, symbol: "M" },
        { value: 1000000000, symbol: "B" },
        { value: 1000000000000, symbol: "T" }
    ];

    /** 🔠 Capitalize the first letter of a string */
    public static capitalize(string: string): string {
        return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : string;
    }

    /** 🔠 Capitalize the first letter of each word in a string */
    public static capitalizeEachWord(string?: string): string {
        if(!string) { return "" }
        
        return string.split(" ").map(word => this.capitalize(word)).join(" ");
    }

    // Method to format date of birth
    public static formatDOB(dob?: string | Date | null): string | null {
        return dob ? dayjs(dob).format("YYYY-MM-DD") : null;
    }

    // Method to format date value Thu, Aug 14 2025
    public static formatReadableDate (date_value: string): string {
        if (!date_value) { return ""; }

        return dayjs(date_value).format("ddd, MMM DD YYYY");
    };

     // Method to format date time value Thu, Aug 14 2025, 10:45 AM
    public static formatReadableDateTime (date_value: string): string {
        if (!date_value) { return ""; }
        
        return dayjs(date_value).format("ddd, MMM DD YYYY, hh:mm A");
    };

    // Format member full name
    public static formatMemberFullName(first_name?: string, last_name?: string): string | null {
        return first_name && last_name ? `${first_name} ${last_name}` : null;
    }

    // Format member preview
    public static formatMemberPreview(first_name?: string, last_name?: string, public_id?: string): string | null {
        return first_name && last_name && public_id 
            ? `(${public_id}) - ${first_name} ${last_name}` 
            : null;
    }

    /** 💰 Format a number with commas */
    public static formatAmount(amount: number): string {
        if (!amount) return "0";
        return amount > 0 ? Intl.NumberFormat("en-US").format(amount) : amount.toString();
    }

    /** 🔢 Format large numbers with suffixes (K, M, B, T) */
    public static nFormatter(num: number, digits = 1): string {
        const item = this.count_lookup.slice().reverse().find(item => num >= item.value);
        if (item) {
            const formatted = (num / item.value)
                .toFixed(digits)
                .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1");
            return `${formatted}${item.symbol}`;
        }
        return "0";
    }

    /** 🔢 Round a number to two decimal places */
    public static roundToTwoDecimalPlaces(value: number): number {
        if (typeof value !== "number") throw new Error("Input must be a number");
        return Math.round(value * 100) / 100;
    }

    /** 0️⃣ Remove leading zeros from a number or string */
    public static removeLeadingZeros(num: string | number): string {
        return num.toString().replace(/^0+/, "") || "0";
    }

    /** 🎂 Convert date of birth string to age */
    public static dobToAge(dob_string: string): number {
        const dob = new Date(dob_string);
        let age = new Date().getFullYear() - dob.getFullYear();
        const month_difference = new Date().getMonth() - dob.getMonth();
        if (month_difference < 0 || (month_difference === 0 && new Date().getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }

    /** 🔠 Convert snake_case to Title Case */
    public static toTitleCase(str: string): string {
        return str.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }

    /** 🐫 Convert snake_case to PascalCase */
    public static toPascalCase(str: string): string {
        return str.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    }

    /** 🔠 Convert string to snake_case */
    public static toSnakeCase(name: string): string {
        return name
            .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
            .toLowerCase();
    }

    /** 🔄 Convert snake_case to plural snake_case */
    public static pluralizeSnakeCase(snake_str: string): string {
        const parts = snake_str.split("_");
        const last_word = parts.pop()!;
        let plural = "";

        if (last_word.endsWith("y") && !/[aeiou]y$/.test(last_word)) {
            plural = last_word.slice(0, -1) + "ies";
        } else if (["s", "x", "z"].includes(last_word.slice(-1)) || last_word.endsWith("ch") || last_word.endsWith("sh")) {
            plural = last_word + "es";
        } else {
            plural = last_word + "s";
        }

        return [...parts, plural].join("_");
    }

    /** 🧹 Filter out empty/null/undefined values from an object */
    public static filterOutEmptyFields(obj: Record<string, any>): Record<string, any> {
        const result: Record<string, any> = {};
        for (const [key, value] of Object.entries(obj)) {
            if (
                value !== null &&
                value !== undefined &&
                !(typeof value === "string" && value.trim() === "") &&
                !(Array.isArray(value) && value.length === 0)
            ) {
                result[key] = value;
            }
        }
        return result;
    }

    // Method to format json string to json object
    public static toJson(json_input: string | object | null | undefined): Record<string, unknown> | null  {
        try {
            if(!json_input || json_input === "") { return null }

            if(typeof json_input === "string") { return JSON.parse(json_input) as Record<string, unknown>; }

            else if(typeof json_input === "object") { return json_input as Record<string, unknown>; }

            else { return null }
        }
        catch(error) {
            return null;
        }
    }   

    // Method to format url to anchor tag html
    public static formatURLToAnchorHtml (
        url_text: string | null, 
        url_link: string,
        class_style: string = "w-full flex items-center space-x-2 truncate justify-center text-sm text-blue-900 underline cursor-pointer hover:text-blue-400",
        icon_class_style: string = "mx-2w-4 h-4 flex items-center"
    ): string {
        if (!url_link) { return "—"; }

        const text = url_text ? url_text: url_link;

        return RenderHtmlUtil.renderHtml({
            text,
            icon: SVGIcons.link_square_arrow_top_right_svg_icon,
            element: "a",
            class_style,
            href: url_link,
            order: "text-first",
            icon_class_style
        })

    }

    public static extractInputBaseAndIndexFieldKey (value: string): { base: string; index: number | null } {
        const regex = /^(.*?)(?:_(\d+))?$/;
        const match = value.match(regex);
        return {
            base: match?.[1] ?? value,
            index: match?.[2] ? parseInt(match[2]) : null
        };
    }

    // Temporary storage for building paired object key/value mappings
    private static _temp_object_map: Record<string, Record<number, { key: string; value: string }>> = {};

    // ✅ Method to build form data
    public static buildFormDataRecord(
        input_id: string,
        input_value: string,
        form_data: Record<string, any> = {}
    ): Record<string, any> {
        // 🔹 Extract the base name (e.g. "social_links_key") and optional index (e.g. 0)
        const { base, index } = this.extractInputBaseAndIndexFieldKey(input_id);

        // 🟩 CASE 1: Simple field (no index) → e.g. "name", "email"
        if (index === null) {
            form_data[base] = input_value;
            return form_data;
        }

        // 🟦 CASE 2: Object-type field → e.g. "social_links_key_0" or "social_links_value_0"
        if (base.endsWith("_key") || base.endsWith("_value")) {
            // 🔹 Extract the object name, e.g. "social_links"
            const object_name = base.replace(/_(key|value)$/, "");

            // Ensure the object exists inside form_data
            if (!form_data[object_name]) {
                form_data[object_name] = {};
            }

            // Get existing keys from the object (used to match by index)
            const object_keys   = Object.keys(form_data[object_name]);
            const total_keys    = object_keys.length;

            // ✅ Check if a record exists at this index
            const record_exists = index >= 0 && index < total_keys;

            if (record_exists) {
                // Extract the existing key/value at this index
                const existing_key      = object_keys[index];
                const existing_value    = existing_key ? form_data?.[object_name]?.[existing_key] : "";

                // 🔄 If we're changing the key name: delete old key and reassign value under the new key
                if (base.endsWith("_key")) {
                    delete form_data[object_name][existing_key];
                    form_data[object_name][input_value] = existing_value;
                } 
                // 🧩 Otherwise we're updating the value for an existing key
                else { form_data[object_name][existing_key] = input_value; }
            }
            else {
                // 🆕 No existing record at this index — create a new one
                // Add a new key placeholder
                if (base.endsWith("_key")) { form_data[object_name][input_value] = ""; }
                else {
                    // Add a temporary key name (until user enters the real key)
                    const temp_key = `Key_${index}`;
                    form_data[object_name][temp_key] = input_value;
                }
            }

            return form_data;
        }

        // 🟨 CASE 3: Array-type field → e.g. "tags_0", "tags_1", etc.
        if (!form_data[base]) {
            form_data[base] = [];
        }

        // 🔹 Assign the value at the specified index
        form_data[base][index] = input_value;

        return form_data;
    }

    // Optional helper to reset temp storage (useful on form reset)
    public static resetTempObjectMap(): void {
        this._temp_object_map = {};
    }

}

export default InputTransformerUtil;