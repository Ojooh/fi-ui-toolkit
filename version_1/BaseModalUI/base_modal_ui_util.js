import LoggerUtil from "../Logger/logger_util";

class BaseModalUIUtil {
    constructor (vue_instance, content_manager) {
        this.name               = "base_modal_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    handleCloseModal = (e) =>  {
        const { handleModalOnClose, layer }  = this.vue_instance?.proxy?.$props;

        if (handleModalOnClose) { handleModalOnClose(layer); }
    }
    
}

export default BaseModalUIUtil;