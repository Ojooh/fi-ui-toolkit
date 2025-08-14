
import BaseController from "../../Base/base_controller";
import TopBarUIConfig from "./top_bar_ui_config";

class TopBarUIController extends BaseController { 
    constructor() {
        super("top_bar_ui_controller", new TopBarUIConfig());
    }
}

export default new TopBarUIController().getUIComponentDefinition();

