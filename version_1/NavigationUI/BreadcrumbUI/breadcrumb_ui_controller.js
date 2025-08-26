
import BaseController from "../../Base/base_controller";
import BreadcrumbUIConfig from "./breadcrumn_ui_config";

class BreadcrumbUIController extends BaseController { 
    constructor() { super("breadcrumb_ui", BreadcrumbUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            wrapper_class_style: { type: String, default: "", required: false },

            link_class_style:  { type: String, default: "text-sm font-medium text-gray-700 hover:text-blue-600", required: false },

            text_class_style:  { type: String, default: "text-sm font-medium text-gray-500", required: false },

            divider_class_style:  { type: String, default: "px-2 text-gray-400", required: false },

            // [{ text: "Home", link: "/" }, { text: "Settings" }]
            items: { type: Array, required: true },
            
            // or "-", ".", "›", etc.
            divider: { type: String, default: "\\" },

            // start | center | end
            align: { type: String, default: "start",  validator: (val) => ["start", "center", "end"].includes(val) }
        }; 
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            alignment_class_style: this.config.getAlignmentClassStyle
        }; 
    }

}

export default new BreadcrumbUIController().getUIComponentDefinition();
