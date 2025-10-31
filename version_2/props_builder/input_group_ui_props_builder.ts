import { reactive }    from "vue";
import SVGIcons             from "../resources/svg_icon_resource"
import RenderHtmlUtil       from "../utils/render_html_util"

import {
    InputGroupClassStyleInterface,
    LabelConfigInterface,
    InputUIPropsInterface,
    InputGroupPropsInterface,
    InputUIBooleanPropsInterface,
    InputUIContentPropsInterface,
    InputUINumberPropsInterface,
    InputUIEventMethodsPropsInterface,
    InputUIClassStylesPropsInterface
} from "../types/props_builder_type";


class InputGroupUIPropsBuilder {
    public static readonly name = "input_group_ui_props_builder";

    // Method to get input ui config
    public static getInputUIConfig (
        input_id: string,
        input_type: string,
        input_placeholder: string,
        input_value: string | number | boolean | any[] = "",
        bolean_config: InputUIBooleanPropsInterface = {},
        content_config: InputUIContentPropsInterface = {},
        number_config: InputUINumberPropsInterface = {},
        event_methods_config: InputUIEventMethodsPropsInterface = {},
        class_styles_config: InputUIClassStylesPropsInterface = {}
    ): InputUIPropsInterface {
        const { 
            is_loading = false, read_only = false, required = true,
            is_checked = false, cache_enabled = true
        } = bolean_config;

        const {
            switch_btn_id = "", label_text = "", no_options_content = "",
            loader_content = RenderHtmlUtil.renderLoaderHtml({ class_style: "w-10 h-10 flex items-center"}),
            caret_content = SVGIcons.trinagular_caret_down_svg_icon,
            options = [], additional_parms = {}
        } = content_config;

        const { length = 6, rows = 8, min = 1, max = 100 } = number_config;

        const { 
            on_change = null, on_click = null, on_key_up = null,
            on_key_down = null, render_option_label = null, 
            get_option_value = null, fetch_method = null
        } = event_methods_config;

        const  {
            input_class_style = "", wrapper_class_style = "", loader_class_style = "", 
            switch_btn_class_style = "", label_text_class_style = "", knob_class_style = "", 
            active_class_style = "", inactive_class_style = "", caret_icon_class = "", 
            dropdown_wrapper_class_style = "", options_wrapper_class_style = "", option_class_style = "",
            option_content_class_style = "",
        } = class_styles_config

        return { 
            id: input_id, type: input_type, placeholder: input_placeholder, value: input_value, 
            is_loading, read_only, required, is_checked, cache_enabled,
            switch_btn_id, label_text, no_options_content, loader_content, caret_content,
            options, additional_parms, length, rows, min, max,
            on_change, on_click, on_key_up, on_key_down, 
            render_option_label, get_option_value, fetch_method,
            input_class_style, wrapper_class_style, loader_class_style, 
            switch_btn_class_style, label_text_class_style, knob_class_style, 
            active_class_style, inactive_class_style, caret_icon_class, 
            dropdown_wrapper_class_style, options_wrapper_class_style, option_class_style,
            option_content_class_style,
        }
    }

    // Method to build input group props
    public static buildInputGroupProps(
        class_styles: InputGroupClassStyleInterface, 
        label_config_options: LabelConfigInterface,
        input_config_options: InputUIPropsInterface
    ): InputGroupPropsInterface {
        const { 
            wrapper_class_style, label_class_style, 
            label_required_class_style, input_class_style
        } = class_styles;

        const { label_text = "", label_required_text = "" } = label_config_options;

        const input_config = { input_class_style, wrapper_class_style, ...input_config_options };

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

export default InputGroupUIPropsBuilder;
