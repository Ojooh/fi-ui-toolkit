

import StatusAlertUIUtil    from "./status_alert_ui_util";
import SVGIcons             from "../../Resources/svg_icon_resource";

class StatusAlertUIConfig { 
    constructor() { 
        this.vue_instance       = null;
        this.util               = {};
        this.content_manager    = {}
    }

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

}

export default StatusAlertUIConfig;