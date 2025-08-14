
import BaseConfig           from "../../Base/base_config";
import NavLinkUIUtil        from "./nav_link_ui_util";

class  NavLinkUIConfig extends BaseConfig { 
    constructor() { super("nav_link_ui_config"); }

    // Method to check if link is router link
    isRouterLink = (instance_variables) => {
        const { link } = instance_variables || {};
        return link?.startsWith("/");
    }

    // Method to check if link is an external link
    isAnchor = (instance_variables) => {
        const { link } = instance_variables || {};
        return link?.startsWith("http");
    }

    // Method to return component type
    componentType = (instance_variables) => {
        const { link } = instance_variables || {};

        if (this.isRouterLink(instance_variables)) { return "router-link"; }
        
        if (this.isAnchor(instance_variables)) { return "a"; }
        
        return "div";
    } 

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new NavLinkUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui components
    getUIComponents() { return {}; }

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
            is_router_link: this?.isRouterLink,

            is_anchor: this?.isAnchor,

            component_type: this?.componentType
        };
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

}

export default NavLinkUIConfig;