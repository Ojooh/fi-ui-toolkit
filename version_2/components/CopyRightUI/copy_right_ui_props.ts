
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

const current_year          = new Date().getFullYear().toString();
const ui_class_styles       = ComponentClassStyles.copy_right_ui;

const CopyRightUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    text_class_style: { type: String, default: ui_class_styles.text_class_style, required: false },

    year: { type: String, default: current_year, required: false },

    powered_by_text: { type: String, required: true },

    author_text: { type: String, required: true },
}

export default CopyRightUIProps;