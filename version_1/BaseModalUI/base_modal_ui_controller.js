

import BaseController from "../Base/base_controller";
import BaseModalUIConfig from "./base_modal_ui_config";

class BaseModalUIController extends BaseController { 
    constructor() {
        super("base_modal_ui_controller", BaseModalUIConfig);
    }

    // Method to get ui props
    getUIProps() { 
        return {   
            overlay_class_style: { type: String, default: "" },

            modal_box_class: { type: String, default: "" },

            header_class_style: { type: String, default: "" },

            body_class_style: { type: String, default: "" },

            is_open: { type: Boolean, required: true },

            // 'center' | 'left' | 'right'
            position: { type: String, default: "center" }, 

            width: { type: String, default: "w-[600px]" },

            layer: { type: Number, default: 0 },

            handleModalOnClose: { type: Function }, 
            
            header_component: { type: Object, required: false },

            header_props: { type: Object, required: true },

            body_component: { type: Object, required: true },

            body_props: { type: Object, required: true }
        }
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            modal_position_class_style: this.config.getModalPositionClassStyle,

            modal_size_class_style: this.config.getModalSizeClassStyle,

            modal_transition_name: this.config.getModaltranstionName
        }; 
    }
}

export default new BaseModalUIController().getUIComponentDefinition();

