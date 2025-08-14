

import BaseController from "../../Base/base_controller";
import inputGroupUIConfig from "./input_group_ui_config";

class InputGroupUIController extends BaseController { 
    constructor() {
        super("input_group_ui_controller", new inputGroupUIConfig());
    }

}

export default new InputGroupUIController().getUIComponentDefinition();
