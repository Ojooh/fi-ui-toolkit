import LoggerUtil from "../../Logger/logger_util";

class ButtonUIUtil {
    constructor (vue_instance, content_manager = {}) {
        this.name               = "button_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;

        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }


}

export default ButtonUIUtil;