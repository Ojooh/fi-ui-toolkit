
import LoggerUtil from "../../../Logger/logger_util";

class ModalSidebarUIUtil {
    constructor () {
        this.name               = "modal_sidebar_ui_util"
        this.vue_instance                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
        this.dropdown_instance  = null
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance                 = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get position class style
    getPositionClassStyle = (instance_variable) => {
        const { position } = instance_variable;
        return position === "right" ? "right-0" : "left-0"
    }

    // Method to get show class style
    getShowClassStyle = (instance_variable) => {
        const { position, show } = instance_variable;
        return show ? "translate-x-0" : (position === "right" ? "translate-x-full" : "-translate-x-full");
    }

    // Mthod to handle close side bar
    handleCloseSidebar = (e) => {
        const { close_sidebar, show } = this.vue_instance?.props;

        if(close_sidebar && show) { close_sidebar(e); }
    }


}

export default ModalSidebarUIUtil