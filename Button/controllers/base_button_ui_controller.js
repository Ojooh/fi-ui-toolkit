import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import ButtonUIUtil from "../utils/button_ui_util";


class BaseButtonUIController {
    constructor (name, btn_default_config) {
        this.name                   = name;
        this.btn_default_config     = btn_default_config
        this.vm                     = null; 
        this.util                   = null;
        this.logger                 = new LoggerUtil({ prefix: this.name.toUpperCase() })
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => { 
        return {
            config: { type: Object, required: true, default: this.btn_default_config }
        } 
    }

    // State data
    getUIStateData = () => {
        this.vm         = getCurrentInstance();
        this.util       = new ButtonUIUtil(this.name, this.vm);

        return { util: this?.util } 
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

export default BaseButtonUIController