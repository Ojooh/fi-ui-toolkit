

import BaseController           from "../../Base/base_controller";
import ModalSidebarUIConfig     from "./modal_sidebar_ui_config";

class ModalSidebarUIController extends BaseController { 
    constructor() { super("modal_sidebar_ui", ModalSidebarUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            overlay_class_style: { type: String, default: "", required: false },

            sidebar_class_style: { type: String, default: "", required: false },

            section_1_class_style: { type: String, default: "", required: false },

            section_2_class_style: { type: String, default: "", required: false },

            show: { type: Boolean, default: false },
            
            position: { type: String, default: "right", validator: (val) => ["left", "right"].includes(val) },

            section_1_component: { type: Object, default: null, required: false },

            section_1_props: { type: Object, default: null, required: false },

            section_2_component: { type: Object, default: null, required: false },

            section_2_props: { type: Object, default: null, required: false },

            close_sidebar: { type: Function, default: null, required: false },
        }
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            position_class_style: this.config.getPositionClassStyle,

            show_class_style: this.config.getShowClassStyle,
        };
    }
}

export default new ModalSidebarUIController().getUIComponentDefinition();
