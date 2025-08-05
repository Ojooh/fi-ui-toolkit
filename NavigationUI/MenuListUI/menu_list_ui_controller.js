
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import MenuListUIUtil from "./menu_list_ui_util";

import NavLinkUI from "../NavLinkUI/nav_link_ui.vue";

class MenuListUIController {
    constructor() {
        this.name       = "menu_list_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new MenuListUIUtil();
    }

    // Public method to expose components
    getUIComponents = () => { return { NavLinkUI  }; };

    // Method to get ui props
    getUIProps = () => {        
        return {    
            wrapper_class_style: { type: String, default: "", required: false },

            second_level_wrapper_class_style: { type: String, default: "pl-4 border-l border-gray-200", required: false },

            menus: { type: Array, required: true },
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
    getUIComputedData = () => { return {}; }

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

export default new MenuListUIController().getUIComponentDefinition();
