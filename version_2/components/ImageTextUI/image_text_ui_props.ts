import type { PropType }            from "vue";
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.image_text_ui;

const ImageTextUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    img_wrapper_class_style: { type: String, default: ui_class_styles.img_wrapper_class_style, required: false },

    img_class_style: { type: String, default: ui_class_styles.img_class_style, required: false },

    text_class_style: { type: String, default: ui_class_styles.text_class_style, required: false },

    image_src: { type: String, required: false, default: null },

    img_alt_text: { type: String, required: false, default: null },

    text_content: { type: String, required: false, default: null },
}

export default ImageTextUIProps;