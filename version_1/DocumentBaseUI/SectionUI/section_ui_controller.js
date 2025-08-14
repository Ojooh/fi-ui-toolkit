
import BaseController from "../../Base/base_controller";
import SectionUIConfig from "./section_ui_config";

class SectionUIController extends BaseController { 
    constructor() {
        super("section_ui_controller", new SectionUIConfig());
    }

}

export default new SectionUIController().getUIComponentDefinition();
