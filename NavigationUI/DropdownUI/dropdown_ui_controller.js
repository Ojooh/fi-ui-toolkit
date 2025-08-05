
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import DropdownUIUtil from "./dropdown_ui_util";
import NavLinkUI from "../NavLinkUI/nav_link_ui.vue";

class DropdownUIController {
    constructor() {
        this.name       = "dropdown_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new DropdownUIUtil();
    }

    // Public method to expose components
    getUIComponents = () => { return { NavLinkUI }; };

    // Method to get ui props
    getUIProps = () => {        
        return {            
            parent_class_style: { type: String, default: "", required: false },

            btn_class_style: { type: String, default: "", required: false },

            menu_parent_class_style: { type: String, default: "", required: false },

            menu_class_style: { type: String, default: "", required: false },

            menu_list_class_style: { type: String, default: "", required: false },

            btn_id: { type: String, required: true },

            menu_id: { type: String, required: true },

            btn_content: { type: String, required: true },

            menu_list: { type: Array, required: true, default: [] },
            
        }
    }

    // State data
    getUIStateData = () => { 
        this.vm = getCurrentInstance();
        this.util.setVueInstance(this.vm);

        const util = this.util;

        return { util }
     };

    // Computed variables
    getUIComputedData = () => { return { }; };

    // Watchers
    getUIWatchers = () => { return { } };

    // Lifecycle: created
    handleOnCreatedLogic = () => {
        try {
            this.logger.log(`[Created] Component ${this.name} has been created`);
        } catch (error) {
            this.logger.error(`[Created] Error in Component ${this.name}:`, error);
        }
    };

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

    // Lifecycle: beforeUnmount
    handleBeforeUnmountedLogic = () => {
        try {
            this.logger.log(`[BeforeUnmount] Component ${this.name} will unmount`);
        } catch (error) {
            this.logger.error(`[BeforeUnmount] Error in component ${this.name}:`, error);
        }
    };

    // Get final Vue component definition
    getUIComponentDefinition = () => {
        return {
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getUIStateData,
            computed: this.getUIComputedData(),
            watch: this.getUIWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
        };
    };
}

export default new DropdownUIController().getUIComponentDefinition();
