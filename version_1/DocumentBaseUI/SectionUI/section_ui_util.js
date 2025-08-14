import LoggerUtil from "../../Logger/logger_util";

class SectionUIUtil {
    constructor (vue_instance, content_manager = {}) {
        this.name               = "section_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance                 = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }
}

export default SectionUIUtil;