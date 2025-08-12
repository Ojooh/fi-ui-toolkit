
import LoggerUtil from "../Logger/logger_util";

class BaseConfig {
    constructor(name) {
        this.name               = name
        this.vue_instance       = null;
        this.content_manager    =  {};
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = null
    }

    // Method to get ui components
    getUIComponents() { return {}; }

    // Method to get ui props
    getUIProps() { return {}; }

    // Method to get ui state data
    getUIStateData() { return {}; }

    // Method to get ui computed data
    getUIComputedData() { return {}; }

    // Method to get ui watchers
    getUIWatchers() { return {}; }

}

export default BaseConfig;