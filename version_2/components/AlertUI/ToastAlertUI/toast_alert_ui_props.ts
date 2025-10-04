
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles  = ComponentClassStyles.alert_ui.toast_alert_ui;

const ToastAlertUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles?.wrapper_class_style, required: false },
    
    icon_wrapper_class_style: { type: String, default: ui_class_styles?.icon_wrapper_class_style, required: false },

    icon_class_style: { type: String, default: ui_class_styles?.icon_class_style, required: false },

    message_class_style: { type: String, default: ui_class_styles?.message_class_style, required: false },

    status_icon: { type: String, default: "", required: false }, 

    status: { type: String, default: "", required: true }, 

    message: { type: String, default: "", required: true }, 

    on_close: { type: Function, default: () => {}, required: true },
}

export default ToastAlertUIProps;