import { Dropdown } from 'flowbite';

import LoggerUtil from "../../Logger/logger_util";

class DropdownUIUtil {
    constructor () {
        this.name               = "dropdown_ui_util"
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

    // Method to get dropdown options
    getDropdownOptions = () => {
        const placement                 = "bottom";
        const triggerType               = "click";
        const offsetSkidding            = -50;
        const offsetDistance            = 10;
        const delay                     = 300;
        const ignoreClickOutsideClass   = false
        const onHide                    = () => { this.dropdown_instance.visible = true };
        const onShow                    = () => { this.dropdown_instance.visible = false };

        return { placement, triggerType, offsetSkidding, offsetDistance, delay, ignoreClickOutsideClass, onHide, onShow };
    }

    // Method to instantiate dropdown
    getDropdownInstance = () => {
        const { btn_id, menu_id }   = this.vm?.props;
        const menu_el               = document.getElementById(menu_id);

        if(this.dropdown_instance) { return menu_el }
        
        const btn_el                = document.getElementById(btn_id);
        const options               = this.getDropdownOptions();
        const instance_options      = { id: menu_el, override: true };

        this.dropdown_instance      = new Dropdown(menu_el, btn_el, options, instance_options);
        return menu_el
    }

    // Method to toggle dropdown menu
    toggleDropdownMenu = (e) => {
        const menu_el       = this.getDropdownInstance();
        const is_visible    = this.dropdown_instance.visible;
        console.log({ is_visible })

        if(is_visible) {
            this.dropdown_instance.visible = false;
            return this.dropdown_instance.hide()
        }

        this.dropdown_instance.visible = true;
        return this.dropdown_instance?.show();
    }

}

export default DropdownUIUtil