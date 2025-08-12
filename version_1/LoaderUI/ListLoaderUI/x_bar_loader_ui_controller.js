
import BaseController from "../../Base/base_controller";
import XBarLoaderUIConfig from "./x_bar_loader_ui_config";

class XBarLoaderUIController extends BaseController { 
    constructor() {
        super("x_bar_loader_ui", new XBarLoaderUIConfig());
    }

}

export default new XBarLoaderUIController().getUIComponentDefinition();