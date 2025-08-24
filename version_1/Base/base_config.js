
import LoggerUtil from "../Logger/logger_util";

class BaseConfig {
    constructor(name) { 
            this.module_name        = `${name}_config`;
            this.vue_instance       = null;
            this.util               = {};
            this.content_manager    = {};
            
            this.logger             = new LoggerUtil({ prefix: name.toUpperCase() }); 
        }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = null
    }

}

export default BaseConfig;