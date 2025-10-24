import { PropType }                 from "vue";
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

const ui_class_styles         = ComponentClassStyles.confirm_action_ui;

const ConfirmActionUIProps   = {

    question_text: { type: String, default: "", required: true },

    cancel_btn_content: { type: String, default: "Cancel", required: false },

    confirm_btn_content: { type: String, default: "Confirm", required: false },

    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    content_text_wrapper_class_style: { type: String, default: ui_class_styles.content_text_wrapper_class_style, required: false },

    content_class_style: { type: String, default: ui_class_styles.content_class_style, required: false },

    action_btn_wrapper_class_style: { type: String, default: ui_class_styles.action_btn_wrapper_class_style, required: false },

    on_cancel_click:  { type: Function, default: null, required: false },

    on_confirm_click:  { type: Function, default: null, required: false },
}

export default ConfirmActionUIProps;