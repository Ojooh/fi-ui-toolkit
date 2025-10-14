import { reactive } from "vue";

import {
  SearchFieldClassStyleInterface,
  LabelConfigInterface,
  InputUIPropsInterface,
  ButtonUIPropsInterface,
  SearchFieldUIPropsInterface,
} from "../types/props_builder_type";

class SearchFieldUIPropsBuilder {
  public static readonly name = "search_field_ui_props_builder";

    // Method to Build input config (reuses InputUIPropsInterface)
    public static buildInputProps(input_config_options: InputUIPropsInterface): InputUIPropsInterface {
        const { 
            id, value, type, placeholder, read_only, required, 
            is_checked, wrapper_class_style = "", length = 0, input_class_style = "",
            on_change = null, on_click = null, on_key_up = null, on_key_down = null, 
        } = input_config_options;

        return reactive({ 
            id, value, type, placeholder, read_only, required, is_checked, 
            on_change, on_click, on_key_up, on_key_down, 
            input_class_style, wrapper_class_style, length,
        });
    }

    // Method to Build button config (reuses ButtonUIPropsInterface)
    public static buildButtonProps(btn_config_options: ButtonUIPropsInterface): ButtonUIPropsInterface {
        const { 
            id, type = "button", content_text = "", loader_content_text = "", 
            show_loader = false, disabled = false, on_click = null, btn_class_style = ""
        } = btn_config_options;

        return reactive({ 
            id, type, content_text, loader_content_text, 
            show_loader, disabled, on_click, btn_class_style,
        });
    }

    // Method to Build search field props (combines label, input, and button configs)
    public static buildSearchFieldProps(
        class_styles: SearchFieldClassStyleInterface,
        label_config_options: LabelConfigInterface,
        input_config_options: InputUIPropsInterface,
        btn_config_options: ButtonUIPropsInterface
    ): SearchFieldUIPropsInterface {
        const { 
            wrapper_class_style, label_class_style, label_required_class_style, search_wrapper_class_style, 
            btn_wrapper_class_style, input_wrapper_class_style,
        } = class_styles;

        const { label_text = "", label_required_text = "" } = label_config_options;

        const input_config  = this.buildInputProps(input_config_options);
        const btn_config    = this.buildButtonProps(btn_config_options);

        // Return reactive search field props
        return reactive({ 
            wrapper_class_style, label_class_style, label_required_class_style, search_wrapper_class_style, 
            btn_wrapper_class_style, input_wrapper_class_style, label_text, label_required_text, 
            input_config, btn_config,
        });
    }
}

export default SearchFieldUIPropsBuilder;
