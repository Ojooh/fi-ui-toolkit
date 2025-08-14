

import BaseController   from "../../Base/base_controller";
import DropdownUIConfig from "./dropdown_ui_config";

class DropdownUIController extends BaseController { 
    constructor() {
        super("dropdown_ui_controller", new DropdownUIConfig());
    }
}

export default new DropdownUIController().getUIComponentDefinition();
