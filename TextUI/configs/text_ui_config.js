
import LoggerUtil       from "../..//Logger/logger_util.js";
import TextUIUtil       from "../utils/text_ui_util.js";

class TextUIConfig {
    constructor() {
        this.name               = "registered_apps_view_config"
        this.vue_instance       = null;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance       = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new TextUIUtil(this.vue_instance, this.content_manager);
    }

    getStateVariables = () => { 
        const util = this.util;

        return { util };
    }

}

export default TextUIConfig;