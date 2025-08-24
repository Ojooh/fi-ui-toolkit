
import BaseController from "../../Base/base_controller";
import StatusAlertUIConfig from "./status_alert_ui_config";

class StatusAlertUIController extends BaseController { 
    constructor() {
        super("status_alert_ui", StatusAlertUIConfig);
    }

    // Method to get ui props
    getUIProps() { 
        return {
            visible: { type: Boolean, default: false, required: false },
            
            status_overlay_class_style: { type: String, default: "", required: false },

            alert_status_class_style_obj: { type: Object, default: {}, required: false },

            alert_status_icon_obj: { type: Object, default: {}, required: false },

            alert_status_text_style_obj: { type: Object, default: {}, required: false },

            alert_status: { type: String, required: false },

            alert_message: { type: String, required: false }
        }; 
    }

    // Method to get computed data
    getUIComputedData() { 
        return {
            bg_class: this.config.getStatusClassStyle,

            animation_class: this.config.getAnimationClassStyle,

            status_icon: this.config.getStatusIcon,

            text_class_style: this.config.getTextClassStyle,

            close_btn_icon: this.config.getCloseButtonIcon
        }; 
    }

}

export default new StatusAlertUIController().getUIComponentDefinition();
