
import LoggerUtil  from "../../Logger/logger_util";

class InputGroupUIUtil {
    constructor (vue_instance, content_manager = {}) {
        this.name               = "input_group_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;

        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }
}

export default InputGroupUIUtil