
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles.input_ui;

const InputUIProps   = {
    id: { type: String, required: true },

    type: { type: String, required: true },

    placeholder: { type: String, default: "", required: false },
            
    read_only: { type: Boolean, default: false, required: false },
    
    is_checked: { type: Boolean, default: false, required: false },

    value: { type: String, default: "", required: false },

    required: { type: Boolean, default: false, required: false },
    
    input_class_style: { type: String, default: ui_class_styles.input_class_style, required: false },

    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    length: { type: Number, default: 6, required: false },

    on_key_up:  { type: Function, default: null, required: false },

    on_key_down:  { type: Function, default: null, required: false },
    
    on_change:  { type: Function, default: null, required: false },

    on_click:  { type: Function, default: null, required: false },
}

export default InputUIProps;