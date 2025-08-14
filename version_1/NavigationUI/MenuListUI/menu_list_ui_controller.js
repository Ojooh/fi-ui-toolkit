
import BaseController from "../../Base/base_controller";
import MenuListUIConfig from "./menu_list_ui_config";

class MenuListUIController extends BaseController { 
    constructor() {
        super("menu_list_ui_controller", new MenuListUIConfig());
    }
}

export default new MenuListUIController().getUIComponentDefinition();
