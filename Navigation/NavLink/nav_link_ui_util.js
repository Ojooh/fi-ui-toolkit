import { Dropdown } from 'flowbite';

import LoggerUtil from "../../Logger/logger_util";

class NavLinkUIUtil {
    constructor () {
        this.name               = "nav_link_ui_util"
        this.vm                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
        this.dropdown_instance  = null
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vm                 = vm;
        this.content_manager    = this.vm?.proxy?.$content_manager || {};
    }

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

    // Method to handle on click event
    handleOnClickEvent = (event) => {
        const { link, on_click } = this.vm?.props;
        
        if (!link && on_click) { this.on_click(event); }
    }

}

export default NavLinkUIUtil;