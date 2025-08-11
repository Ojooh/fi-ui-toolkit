import LoggerUtil from "../../Logger/logger_util";

class SectionUIUtil {
    constructor () {
        this.name               = "section_ui_util"
        this.vue_instance                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance                 = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }
}

export default SectionUIUtil;