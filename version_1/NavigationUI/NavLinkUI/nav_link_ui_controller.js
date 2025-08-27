


import BaseController   from "../../Base/base_controller";
import NavLinkUIConfig  from "./nav_link_ui_config";

class NavLinkUIController extends BaseController { 
    constructor() { super("nav_link_ui", NavLinkUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            // Class styles
            wrapper_class_style: { type: String, default: "", required: false },

            active_menu_class_style: { type: String, default: "", required: false },

            icon_parent_class_style: { type: String, default: "", required: false },

            icon_img_class_style: { type: String, default: "", required: false },

            svg_icon_class_style: { type: String, default: "", required: false },

            content_class_style: { type: String, default: "", required: false },

            menu_id: { type: String, required: true },
    
            link: { type: String, default: null, required: false },

            icon_img_link: { type: String, default: null, required: false },

            icon_img_alt_text: { type: String, default: "", required: false },

            svg_icon: { type: String, default: null, required: false },

            html_content: { type: String, default: "", required: false },

            on_click: { type: Function, default: null, required: false },

            is_active: { type: Function, default: () => { return false }, required: false },
        }
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            is_router_link: this.config.isRouterLink,

            is_anchor: this.config.isAnchor,

            component_type: this.config.componentType
        };
    }

}

export default new NavLinkUIController().getUIComponentDefinition();

