

import BaseController from "../../Base/base_controller";
import ModalSidebarUIConfig from "./modal_sidebar_ui_config";

class ModalSidebarUIController extends BaseController { 
    constructor() {
        super("modal_sidebar_ui_controller", new ModalSidebarUIConfig());
    }
}

export default new ModalSidebarUIController().getUIComponentDefinition();
