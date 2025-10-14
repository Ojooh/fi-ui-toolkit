
import { ComponentClassStyles } from "../../enums/component_class_styles.enums";
import { ButtonType }           from "@v2/types/props_builder_type";

const ui_class_styles       = ComponentClassStyles.button_ui;

const ButtonUIProps   = {
    type: { type: String as () => ButtonType, default: "button", required: false },

    id: { type: String, required: false },

    btn_class_style: { type: String, default: ui_class_styles.btn_class_style, required: false },
    
    show_loader: { type: Boolean, default: false, required: false },

    disabled: { type: Boolean, default: false, required: false },

    loader_content_text: { type: String, default: "", required: false },

    content_text: { type: String, default: "", required: false },

    on_click:  { type: Function, default: null, required: false },
}

export default ButtonUIProps;