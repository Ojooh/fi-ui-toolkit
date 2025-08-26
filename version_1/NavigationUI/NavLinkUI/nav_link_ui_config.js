
import BaseConfig           from "../../Base/base_config";
import NavLinkUIUtil        from "./nav_link_ui_util";

class  NavLinkUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

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
        this.util               = new NavLinkUIUtil(vue_instance, this.content_manager);
    }
}

export default NavLinkUIConfig;