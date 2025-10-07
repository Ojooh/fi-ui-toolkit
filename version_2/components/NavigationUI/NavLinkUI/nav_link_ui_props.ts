
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.navigation_ui?.nav_link_ui;

const NavLinkUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    active_menu_class_style: { type: String, default: ui_class_styles.active_menu_class_style, required: false },

    icon_img_wrapper_class_style: { type: String, default: ui_class_styles.icon_img_wrapper_class_style, required: false },

    icon_img_class_style: { type: String, default: ui_class_styles.icon_img_class_style, required: false },

    content_class_style: { type: String, default: ui_class_styles.content_class_style, required: false },

    content:{ type: String, default: null, required: false },

    id: { type: String, required: true },
    
    link: { type: String, default: null, required: false },

    icon: { type: String, default: null, required: false },

    img_src: { type: String, default: null, required: false },

    img_alt_text: { type: String, default: null, required: false },

    on_click: { type: Function, default: null, required: false },

    is_active: { type: Function, default: () => { return false }, required: false },

}

export default NavLinkUIProps;