import { reactive, warn }     from "vue";
import SVGIcons         from "../resources/svg_icon_resource";

import {
    AlertBorderClassStyleInterface,
    AlertStatusClassStyleInterface,
    ToastAlertClassStyleInterface,
    ToastAlertPropsInterface
} from "../types/props_builder_type";

import { 
    BaseEventHandlerInterface 
} from "../types/component_type";


class ToastAlertUIPropsBuilder {
    public static readonly name = "toast_alert_ui_props_builder";

    // Method to get border status class
    private static getBorderStatusClassStyle (border_class_styles: AlertBorderClassStyleInterface, status: string): string {
        const { 
            success_border_class_style = "bg-green-100 border-l-green-900", 
            error_border_class_style = "bg-red-200 border-l-red-900", 
            info_border_class_style = "bg-blue-300 border-l-blue-900" ,
            warning_border_class_style = "bg-yellow-100 border-l-yellow-900"
        } = border_class_styles;

        switch (status.toLowerCase() || "info") {
            case "success":
                return success_border_class_style
            case "error":
                return error_border_class_style
            case "warning":
                return warning_border_class_style
            default:
                return info_border_class_style
        }
    }

    // Method to get icon based on status
    private static getStatusIcon (status: string): string { 
        switch (status.toLowerCase() || "info") {
            case "success":
                return SVGIcons?.check_circle_svg_icon;
            case "error":
                return SVGIcons?.x_circile_svg_icon;
            case "warning":
                return SVGIcons?.warning_traingle_svg_icon;
            default:
                return SVGIcons?.exclamation_circle_svg_icon;
        }

    }

    // Method to get status class style
    public static getStatusClassStyle  (status_class_styles: AlertStatusClassStyleInterface, status: string): string {
        const { 
            success_class_style = "text-sm font-semibold text-green-900 bg-green-100", 
            error_class_style = "text-sm font-semibold text-red-900 bg-red-200", 
            info_class_style = "text-sm font-semibold text-blue-900 bg-blue-300" ,
            warning_class_style = "text-sm font-semibold text-amber-900 bg-yellow-100"
        } = status_class_styles;

        switch (status.toLowerCase() || "info") {
            case "success":
                return success_class_style
            case "error":
                return error_class_style
            case "warning":
                return warning_class_style
            default:
                return info_class_style
        }
    }

    // Method to get toast alert ui props
    public static getToastAlertProps (
        event_handler: BaseEventHandlerInterface, 
        status: string = "",
        message: string = "",
        class_styles: ToastAlertClassStyleInterface = {}
    ): ToastAlertPropsInterface {
        const { border_class_styles = {}, status_class_styles = {} } = class_styles;

        const status_icon               = this.getStatusIcon(status);
        const border_class_style        = this.getBorderStatusClassStyle(border_class_styles, status);
        const status_class_style        = this.getStatusClassStyle(status_class_styles, status);
        const wrapper_class_style       = `${class_styles?.wrapper_class_style} ${border_class_style} ${status_class_style}`;
        const icon_wrapper_class_style  = `${class_styles?.icon_wrapper_class_style} ${status_class_style}`;
        const icon_class_style          = `${class_styles?.icon_class_style}`;
        const message_class_style       = `${class_styles?.message_class_style} ${status_class_style}`;
        const on_close                  = event_handler?.handleOnCloseToastAlertClick.bind(event_handler) ?? null;

        return reactive({
            wrapper_class_style, icon_wrapper_class_style, icon_class_style, message_class_style,
            status, status_icon, message, on_close,
        })

    }

}

export default ToastAlertUIPropsBuilder;
