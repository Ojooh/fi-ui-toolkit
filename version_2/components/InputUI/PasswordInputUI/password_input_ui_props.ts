
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles  = ComponentClassStyles.input_ui;

const PasswordInputUIProps   = {
    id: { type: String, required: true },
            
    value: { type: Object, default: null, required: false },

    placeholder: { type: String, default: "", required: false },
            
    read_only: { type: Boolean, default: false, required: false },

    required: { type: Boolean, default: false, required: false },
            
    input_class_style: { type: String, default: ui_class_styles.input_class_style, required: false }, 

    on_change:  { type: Function, default: null, required: false },

    on_click:  { type: Function, default: null, required: false },
            
    on_key_up:  { type: Function, default: null, required: false },

    on_key_down:  { type: Function, default: null, required: false }
}

export default PasswordInputUIProps;