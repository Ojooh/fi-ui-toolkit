
import BaseController               from "../Base/base_controller";
import FeedbackToastUIConfig        from "./feedback_toast_ui_config";

class FeedbackToastUIController extends BaseController { 
    constructor() { super("feedback_toast_ui", FeedbackToastUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            status: { type: String, required: false },

            message: { type: String, required: false },

            toast_class_style: { type: String, default: "", required: false },
        }
    }

    // Method to get ui computed data
    getUIComputedData() {
        return {
            border_class_tyle: this.config.getBorderStatusClassStyle,

            status_icon: this.config.getStatusIcon,

            icon_class_style: this.config.getStatusIconClassStyle,

            text_class_style: this.config.getStatusTextClassStyle,
        }; 
    }

}

export default new FeedbackToastUIController().getUIComponentDefinition();
