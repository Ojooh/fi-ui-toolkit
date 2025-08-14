
import BaseController from "../../Base/base_controller";
import StatusAlertUIConfig from "./status_alert_ui_config";

class StatusAlertUIController extends BaseController { 
    constructor() {
        super("status_alert_ui_controller", new StatusAlertUIConfig());
    }

}

export default new StatusAlertUIController().getUIComponentDefinition();
