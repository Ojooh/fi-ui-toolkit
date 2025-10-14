
import { PropType }                 from "vue";
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

import { 
    InputUIPropsInterface,
    ButtonUIPropsInterface
} from "../../types/props_builder_type";

const ui_class_styles  = ComponentClassStyles.search_field_ui;

const SearchFieldUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },
    
    label_class_style: { type: String, default: ui_class_styles.label_class_style, required: false },

    label_required_class_style: { type: String, default: ui_class_styles.label_required_class_style, required: false },

    search_wrapper_class_style: { type: String, default: ui_class_styles.search_wrapper_class_style, required: false },

    btn_wrapper_class_style: { type: String, default: ui_class_styles.btn_wrapper_class_style, required: false },

    input_wrapper_class_style: { type: String, default: ui_class_styles.input_wrapper_class_style, required: false },
    
    label_text: { type: String, default: "", required: false }, 

    label_required_text: { type: String, default: "", required: false }, 

    input_config: { type: Object as PropType<InputUIPropsInterface>, required: true },

    btn_config: { type: Object as PropType<ButtonUIPropsInterface>, required: true },

}

export default SearchFieldUIProps;