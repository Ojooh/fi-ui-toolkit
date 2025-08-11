import { getCurrentInstance } from "vue";

import LoggerUtil from "../../../Logger/logger_util";
import InputUIUtil from "../utils/input_ui_util";

class BaseInputUIController {
    constructor (name, input_default_config) {
        this.name                   = name;
        this.input_default_config   = input_default_config;
        this.vue_instance                     = null; 
        this.util                   = new InputUIUtil();;
        this.logger                 = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => { 
        return {
            config: { type: Object, required: true, default: this.input_default_config }
        } 
    }

    // State data
    getUIStateData = () => {
        this.vue_instance = getCurrentInstance();
        
        this.util.setVueInstance(this.vue_instance);

        const util  = this.util;

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

export default BaseInputUIController