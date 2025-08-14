
import BaseController from "../../Base/base_controller";
import StatusAlertUIConfig from "./status_alert_ui_config";

class SectionUIController extends BaseController { 
    constructor() {
        super("section_ui_controller", new StatusAlertUIConfig());
    }

}

export default new SectionUIController().getUIComponentDefinition();
