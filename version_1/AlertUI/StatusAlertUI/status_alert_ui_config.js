
import BaseConfig           from "../../Base/base_config";
import StatusAlertUIUtil    from "./status_alert_ui_util";
import SVGIcons             from "../../../Resources/svg_icon_resource";

class StatusAlertUIConfig extends BaseConfig { 
    constructor() { super("status_alert_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new StatusAlertUIUtil(vue_instance, this.content_manager)
    }

    // Method to get status class style
    getStatusClassStyle = (instance_variables) => {
        const { alert_status_class_style_obj, alert_status } = instance_variables || {};

        const status = alert_status.toLowerCase() || "info";

        switch (status) {
            case "success":
                return `bg-gradient-to-r ${alert_status_class_style_obj?.success_class_style || 'from-green-500 to-green-700'}`;
            case "error":
                return `bg-gradient-to-r ${alert_status_class_style_obj?.error_class_style || 'from-red-700 to-red-900' }`;
            default:
                return `bg-gradient-to-r ${alert_status_class_style_obj?.info_class_style || 'from-blue-700 to-blue-900' }`;
        }
    }

    // Method to get animation class style
    getAnimationClassStyle = (instance_variables) => {
        const { visible } = instance_variables || {};
        return visible ? "animate-slide-in" : "animate-slide-out";
    }

    // Method to get icon based on status
    getStatusIcon = (instance_variables) => { 
        const { alert_status_icon_obj, alert_status } = instance_variables || {};

        const status = alert_status.toLowerCase() || "info";

        switch (status) {
            case "success":
                return alert_status_icon_obj?.success_icon || SVGIcons?.smiley_face_svg_icon;
            case "error":
                return alert_status_icon_obj?.error_icon || SVGIcons?.error_exclamation_mark_svg_icon;
            default:
                return alert_status_icon_obj?.info_icon || SVGIcons?.question_mark_svg_icon;
        }

    }

    // Method to get text class style based on status
    getTextClassStyle =  (instance_variables) => { 
        const { alert_status_text_style_obj, alert_status } = instance_variables || {};

        const status = alert_status.toLowerCase() || "info";

        switch (status) {
            case "success":
                return alert_status_text_style_obj?.success_icon || "text-white font-black";
            case "error":
                return alert_status_text_style_obj?.success_icon || "text-white font-black";
            default:
                return alert_status_text_style_obj?.success_icon || "text-white font-bold";
        }

    }

    // Method to get close button icon
    getCloseButtonIcon = () => { return SVGIcons?.x_circile_svg_icon; }

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

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            bg_class: this.getStatusClassStyle,

            animation_class: this.getAnimationClassStyle,

            status_icon: this.getStatusIcon,

            text_class_style: this.getTextClassStyle,

            close_btn_icon: this.getCloseButtonIcon
        }; 
    }

}

export default StatusAlertUIConfig;