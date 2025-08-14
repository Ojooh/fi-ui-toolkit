


import BaseController from "../../Base/base_controller";
import ModalSidebarUIConfig from "./modal_sidebar_ui_config";

class NavLinkUIController extends BaseController { 
    constructor() {
        super("dropdown_ui_controller", new ModalSidebarUIConfig());
    }
}

export default new NavLinkUIController().getUIComponentDefinition();

