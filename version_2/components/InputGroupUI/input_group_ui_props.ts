
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

const ui_class_styles  = ComponentClassStyles.input_group_ui;

const InputGroupUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },
    
    label_class_style: { type: String, default: ui_class_styles.label_class_style, required: false },

    label_required_class_style: { type: String, default: ui_class_styles.label_required_class_style, required: false },

    label_text: { type: String, default: "", required: false }, 

    label_required_text: { type: String, default: "", required: false }, 

    input_config: { type: Object, required: true },

}

export default InputGroupUIProps;