import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import InputGroupUIUtil from "./input_group_ui_util";

class InputGroupUIController {
    constructor () {
        this.name                   = "input_group_ui";
        this.vm                     = null; 
        this.util                   = null;
        this.logger                 = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => { 
        return {
            input_group_class_style: { type: String, required: false, default: null },

            label_config: { type: Object, required: true },

            input_config: { type: Object, required: true },
        } 
    }

    // State data
    getAppStateData = () => {
        this.vm         = getCurrentInstance();
        this.util       = new InputGroupUIUtil(this.name, this.vm);

        return { util: this.util } 
    };

    // Computed variables
    getAppComputedVariables = () => { return { }; };

    // Watchers
    getAppWatchers = () => { return { } };

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
    setVueJson = () => {
        return {
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getAppStateData,
            computed: this.getAppComputedVariables(),
            watch: this.getAppWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
        };
    };
}

export default new InputGroupUIController().setVueJson()