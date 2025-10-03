
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles.loader_ui.screen_loader_ui;
const ScreenLoaderUIProps   = {
    visible: { type: Boolean, default: false, required: false },

    wrapper_class_style: { type: String, default: ui_class_styles?.wrapper_class_style, required: false },

    loader_class_style: { type: String, default: ui_class_styles?.loader_class_style, required: false },

    loader_symbol_class_style: { type: String, default: ui_class_styles?.loader_symbol_class_style, required: false },

    loader_text_class_style: { type: String, default: ui_class_styles?.loader_text_class_style, required: false },

    loader_symbol: { type: Object, default: {}, required: false },

    loader_text: { type: String, default: "Loading...", required: false },
}

export default ScreenLoaderUIProps;