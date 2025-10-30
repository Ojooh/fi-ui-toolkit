
export type InputUIType = "email" | "checkbox" | "password" | "text";

export interface InputEventMethodOptions {
    index?: number;
    sortable_value?: string
}

export interface SearchSelectInputControllerAttributesInterface {
    is_open?: boolean;
    is_loading_records?: boolean;
    search_selected_text?: string | null;
    record_options?: any[];
    current_page?: number;
    total_pages?: number;
}