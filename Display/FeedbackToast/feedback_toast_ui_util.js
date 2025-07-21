
import LoggerUtil from "../../Logger/logger_util";
import SVGIcons from "../../Resources/svg_icon_resource";

class FeedbackToastUIUtil {
    constructor () {
        this.name               = "feedback_toast_ui_util"
        this.vm                 = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to get status class style
    getBorderStatusClassStyle = (instance_variables) => {
        const { status } = instance_variables || {};

        switch (status.toLowerCase()) {
            case "success":
                return "bg-green-100 border-l-green-900";
            case "error":
                return "bg-red-200 border-l-red-900";
            case "warning":
                return "bg-yellow-100 border-l-yellow-900";
            default:
                return "bg-blue-300 border-l-blue-900";
        }
    }

    // Method to get icon based on status
    getStatusIcon = (instance_variables) => { 
        const { status } = instance_variables || {};

        switch (status.toLowerCase()) {
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

    // Method to get status icon class style
    getStatusIconClassStyle = (instance_variables) => {
        const { status } = instance_variables || {};

        switch (status.toLowerCase()) {
            case "success":
                return "bg-green-100";
            case "error":
                return "bg-red-200";
            case "warning":
                return "bg-yellow-100";
            default:
                return "bg-blue-300";
        }
    } 

    // Method to get text class style
    getStatusTextClassStyle = (instance_variables) => {
        const { status } = instance_variables || {};

        switch (status.toLowerCase()) {
            case "success":
                return "text-sm font-semibold text-green-900";
            case "error":
                return "text-sm font-semibold text-red-900";
            case "warning":
                return "text-sm font-semibold text-amber-900";
            default:
                return "text-sm font-semibold text-blue-900";
        }
    } 
}

export default FeedbackToastUIUtil;