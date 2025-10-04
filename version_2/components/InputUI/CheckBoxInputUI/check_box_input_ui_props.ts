
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles.input_ui;

const CheckBoxInputUiProps   = {
    id: { type: String, default: "checkbox_id", required: true },
            
    name: { type: String, default: "checkbox", required: false },
    
    is_checked: { type: Boolean, default: false, required: true },

    required: { type: Boolean, default: false, required: false },
    
    input_class_style: { type: String, default: ui_class_styles.input_class_style, required: false }, 
    
    on_change:  { type: Function, default: null, required: false },

    on_click:  { type: Function, default: null, required: false },
}

export default CheckBoxInputUiProps;