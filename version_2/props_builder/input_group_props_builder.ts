import { reactive }    from "vue";

import {
    InputGroupClassStyleInterface,
    LabelConfigInterface,
    InputConfigInterface,
    InputGroupPropsInterface,
} from "../types/props_builder_type";


class InputGroupPropsBuilder {
    public static readonly name = "input_group_props_builder";

    // Method to build input props
    public static buildInputProps( input_config_options: InputConfigInterface, input_class_style?: string ) {
        const { 
            id, value, type, placeholder, read_only, required, is_checked,
            on_change = null, on_click = null, on_key_up = null, on_key_down = null 
        } = input_config_options;

        return reactive({
            id, value, type, placeholder, read_only, required, is_checked,
            on_change, on_click, on_key_up, on_key_down, input_class_style,
        })
    }

    // Method to build input group props
    public static buildInputGroupProps(
        class_styles: InputGroupClassStyleInterface, 
        label_config_options: LabelConfigInterface,
        input_config_options: InputConfigInterface
    ): InputGroupPropsInterface {
        const { 
            wrapper_class_style, label_class_style, 
            label_required_class_style, input_class_style
        } = class_styles;

        const { label_text = "", label_required_text = "" } = label_config_options;

        const input_config = this.buildInputProps(input_config_options, input_class_style);

        // Return the reactive input group props
        return reactive({
            wrapper_class_style,
            label_class_style,
            label_required_class_style,
            label_text,
            label_required_text,
            input_config
        });
    }
}

export default InputGroupPropsBuilder;
