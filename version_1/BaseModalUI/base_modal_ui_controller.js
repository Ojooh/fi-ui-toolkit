

import BaseController from "../Base/base_controller";
import BaseModalUIConfig from "./base_modal_ui_config";

class BaseModalUIController extends BaseController { 
    constructor() {
        super("base_modal_ui_controller", new BaseModalUIConfig());
    }
}

export default new BaseModalUIController().getUIComponentDefinition();

