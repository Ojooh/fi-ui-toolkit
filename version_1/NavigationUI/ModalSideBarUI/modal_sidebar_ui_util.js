
import LoggerUtil from "../../Logger/logger_util";

class ModalSidebarUIUtil {
    constructor (vue_instance, content_manager) {
        this.name               = "modal_sidebar_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }


    // Mthod to handle close side bar
    handleCloseSidebar = (e) => {
        const { close_sidebar, show } = this.vue_instance?.proxy?.$props;

        if(close_sidebar && show) { close_sidebar(e); }
    }


}

export default ModalSidebarUIUtil