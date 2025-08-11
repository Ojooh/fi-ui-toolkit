
import LoggerUtil               from "../../Logger/logger_util";
import ActionButtonUIUtil       from "../utils/action_button_ui_util";

class ActionBtnUIConfig {
    constructor() {
        this.name               = "action_button_ui_config"
        this.vue_instance       = null;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance       = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new ActionButtonUIUtil(this.vue_instance, this.content_manager);
    }

    // Method to get state variables
    getStateVariables = () => {
        const util  = this.util;

        return { util };
    }

}

export default ActionBtnUIConfig;