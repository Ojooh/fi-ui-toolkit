


import BaseController from "../../Base/base_controller";
import NavLinkUIConfig from "./nav_link_ui_config";

class NavLinkUIController extends BaseController { 
    constructor() {
        super("nav_link_ui_controller", new NavLinkUIConfig());
    }
}

export default new NavLinkUIController().getUIComponentDefinition();

