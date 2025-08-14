// base_view_controller.js
import { getCurrentInstance } from "vue";
import LoggerUtil from "../Logger/logger_util";

class BaseController {
    constructor(name, config_instance) {
        this.name           = name;
        this.config         = config_instance || null;
        this.vue_instance   = null;
        this.logger         = new LoggerUtil({ prefix: name.toUpperCase() }); 
    }

    setVueInstance() { 
        this.vue_instance = getCurrentInstance(); 
        this.config.setVueInstance(this.vue_instance);
    }

    // Method to get ui components
    getUIComponents() { return this.config?.getUIComponents?.() || {}; }

    // Method to get ui props
    getUIProps() { return this.config?.getUIProps?.() || {};
    }

    // Method to get ui state data
    getUIStateData() {
        this.setVueInstance();
        return this.config?.getUIStateData?.() || {};
    }

    // Method to get computed data
    getUIComputedData() { return this.config?.getUIComputedData?.() || {}; }

    // Method to get ui watchers
    getUIWatchers() { return this.config?.getUIWatchers?.(this.util) || {}; }

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
