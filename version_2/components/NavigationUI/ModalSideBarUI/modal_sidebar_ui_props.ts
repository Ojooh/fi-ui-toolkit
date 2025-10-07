
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.navigation_ui?.modal_sidebar_ui;

const ModalSidebarUIProps   = {
    id: { type: String, required: true },

    visible: { type: Boolean, default: false, required: true },

    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    sidebar_class_style: { type: String, default: ui_class_styles.sidebar_class_style, required: false },

    section_1_wrapper_class_style: { type: String, default: ui_class_styles.section_1_wrapper_class_style, required: false },

    section_2_wrapper_class_style: { type: String, default: ui_class_styles.section_2_wrapper_class_style, required: false },

    on_click: { type: Function, default: null, required: false },
}

export default ModalSidebarUIProps;