import LoggerUtil from "../../Logger/logger_util";

class MenuListUIUtil {
    constructor () {
        this.name               = "menu_list_ui_util"
        this.vm                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vm                 = vm;
        this.content_manager    = this.vm?.proxy?.$content_manager || {};
    }
}

export default MenuListUIUtil;