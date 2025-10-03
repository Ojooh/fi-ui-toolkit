
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.loader_ui?.list_loader_ui;
const ListLoaderUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles?.wrapper_class_style, required: false },

    number_of_bars: { type: Number, default: 10, required: false },

    bar_class_style: { type: String, default: ui_class_styles?.bar_class_style, required: false },
}

export default ListLoaderUIProps;