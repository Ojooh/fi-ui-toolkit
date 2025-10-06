
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.navigation_ui?.top_bar_ui;

const TopBarUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    section_1_wrapper_class_style: { type: String, default: ui_class_styles.section_1_wrapper_class_style, required: false },

    section_2_wrapper_class_style: { type: String, default: ui_class_styles.section_2_wrapper_class_style, required: false },

    section_3_wrapper_class_style: { type: String, default: ui_class_styles.section_3_wrapper_class_style, required: false },

}

export default TopBarUIProps;