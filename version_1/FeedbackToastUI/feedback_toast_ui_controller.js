




import BaseController               from "../Base/base_controller";
import FeedbackToastConfig          from "./feedback_toast_ui_config";

class FeedbackToastController extends BaseController { 
    constructor() {
        super("feedback_toast_controller", new FeedbackToastConfig());
    }

}

export default new FeedbackToastController().getUIComponentDefinition();
