import LoggerUtil from "../../Logger/logger_util";

class MenuListUIUtil {
    constructor () {
        this.name               = "menu_list_ui_util"
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

export default MenuListUIUtil;