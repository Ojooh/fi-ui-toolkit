
import { ComponentClassStyles }     from "../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.img_avatar_ui;

const ImgAvatarUIProps   = {

    id: { type: String, required: true },

    img_src: { type: String, default: null, required: false },

    img_alt_text: { type: String, default: null, required: false },

    initials:{ type: String, default: null, required: false },

    right_slot_content:{ type: String, default: null, required: false },
    
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    avatar_circle_class_style: { type: String, default: ui_class_styles.avatar_circle_class_style, required: false },

    img_class_style: { type: String, default: ui_class_styles.img_class_style, required: false },

    initials_class_style: { type: String, default: ui_class_styles.initials_class_style, required: false },

    right_slot_class_style: { type: String, default: ui_class_styles.right_slot_class_style, required: false },

    on_click: { type: Function, default: null, required: false },

}

export default ImgAvatarUIProps;