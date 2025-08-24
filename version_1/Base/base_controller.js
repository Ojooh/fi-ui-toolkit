// base_view_controller.js
import { getCurrentInstance } from "vue";
import LoggerUtil from "../Logger/logger_util";

class BaseController {
    constructor(name, config_class = null) {
        this.name           = name;
        this.vue_instance   = null;

        this.config         = config_class ? new config_class() : null;
        this.logger         = new LoggerUtil({ prefix: name.toUpperCase() }); 
    }

    setVueInstance() { 
        this.vue_instance = getCurrentInstance(); 
        this.config?.setVueInstance?.(this.vue_instance);
    }

    // Method to get ui components
    getUIComponents() { return  {}; }

    // Method to get ui props
    getUIProps() { return {}; }

    // Method to get ui state data
    getUIStateData() {
        this.setVueInstance();

        const util              = this.config.util;
        const config_data       = this.config?.getUIStateData?.() || {};

        return { util, ...config_data };
    }

    // Method to get computed data
    getUIComputedData() { return {}; }

    // Method to get ui watchers
    getUIWatchers() { return {}; }

    // Default lifecycle methods (can be overridden in child class)
    async handleOnCreatedLogic() {
        this.logger.log(`[Created] Component ${this.name} has been created`);
    }

    handleOnMountedLogic() {
        this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
    }

    handleBeforeUnmountedLogic() {
        this.logger.log(`[BeforeUnmount] Component ${this.name} will unmount`);
    }

    getUIComponentDefinition() {
        return {
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getUIStateData.bind(this),
            computed: this.getUIComputedData(),
            watch: this.getUIWatchers(),
            created: this.handleOnCreatedLogic.bind(this),
            mounted: this.handleOnMountedLogic.bind(this),
            beforeUnmount: this.handleBeforeUnmountedLogic.bind(this),
        };
    }
}

export default BaseController;
