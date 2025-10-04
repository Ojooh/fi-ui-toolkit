
import BaseController           from "../../../base_classes/base_controller";
import ToastAlertUIEventHandler from "./toast_alert_ui_event_handler";

class ToastAlertUIController extends BaseController {
    public event_handler: ToastAlertUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("toast_alert_ui", props)

        this.event_handler = new ToastAlertUIEventHandler(this);
    }

}

export default ToastAlertUIController;