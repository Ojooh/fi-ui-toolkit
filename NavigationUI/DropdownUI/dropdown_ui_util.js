import { Dropdown } from 'flowbite';

import LoggerUtil from "../../Logger/logger_util";

class DropdownUIUtil {
    constructor () {
        this.name               = "dropdown_ui_util"
        this.vue_instance                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
        this.dropdown_instances = {};
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance                 = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get dropdown options
    getDropdownOptions = (menu_id) => {
        const placement                 = "bottom";
        const triggerType               = "click";
        const offsetSkidding            = -50;
        const offsetDistance            = 10;
        const delay                     = 300;
        const ignoreClickOutsideClass   = false
        const onHide                    = () => {};
        const onShow                    = () => {};

        return { placement, triggerType, offsetSkidding, offsetDistance, delay, ignoreClickOutsideClass, onHide, onShow };
    }

    // Method to instantiate dropdown
    getDropdownInstance = ( btn_id, menu_id) => {
        const menu_el               = document.getElementById(menu_id);
        const btn_el                = document.getElementById(btn_id);

        if (!menu_el || !btn_el) {
            this.logger.error(`Dropdown elements not found: menu_id=${menu_id}, btn_id=${btn_id}`);
            return null;
        }

        // Return existing instance if already created
        if (this.dropdown_instances[menu_id]) { return this.dropdown_instances[menu_id]; }

        const options                       = this.getDropdownOptions(menu_id);
        const instance_options              = { id: menu_el, override: false };
        const instance                      = new Dropdown(menu_el, btn_el, options, instance_options);
        this.dropdown_instances[menu_id]    = { instance, is_visible: false };

        this.logger.info(`Dropdown ${menu_id} instance created`);
        return instance;
    }

    // Hide dropdown programmatically
    hideDropdownMenu = (menu_id) => {
        const { instance, is_visible } = this.dropdown_instances[menu_id];

        if (!instance) { return; }

        if (is_visible) { instance.hide(); } 

       return;
    }

    // Hide dropdown programmatically
    showDropdownMenu = (menu_id) => {
        const { instance, is_visible } = this.dropdown_instances[menu_id];

        if (!instance) { return; }

        if (!is_visible) { instance.show(); } 

       return;
    }

    // Method to toggle dropdown menu
    toggleDropdownMenu = (e,  btn_id, menu_id) => {
        const { instance, is_visible } = this.getDropdownInstance( btn_id, menu_id);

        if (!instance) { return; }

        if (is_visible) { instance.hide(); } 

        else { instance.show(); }

        return this.dropdown_instances[menu_id].is_visible = !this.dropdown_instances[menu_id].is_visible;
    }

}

export default DropdownUIUtil