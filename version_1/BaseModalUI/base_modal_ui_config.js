
import BaseConfig           from "../Base/base_config";
import BaseModalUIUtil     from "./base_modal_ui_util";


class BaseModalUIConfig extends BaseConfig { 
    constructor() { super("base_modal_ui_config"); }

    // Method to get position class style
    getModalPositionClassStyle = (isnatnce_variables) => {
        const { position = "center" } = isnatnce_variables;
        
        if (position === "left") { return "fixed left-0 top-0 h-full"; }

        if (position === "right") { return "fixed right-0 top-0 h-full"; }

        return "relative mx-auto my-auto";
    }

    // Method to get modal size class style
    getModalSizeClassStyle = (isnatnce_variables) => {
        const { position = "center", width } = isnatnce_variables;

        if (position === "left" || position === "right") { return `${width} h-full`; }

        return `${width} max-h-[90vh]`;
    }


    // Method to get modal transition name
    getModaltranstionName = (isnatnce_variables) => {
        const { position = "center", width } = isnatnce_variables;

        if (position === "left") { return "slide-left"; }

        if (position === "right") { return "slide-right"; }

        return "pop-center";
    }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new BaseModalUIUtil(vue_instance, this.content_manager);
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
            modal_position_class_style: this.getModalPositionClassStyle,

            modal_size_class_style: this.getModalSizeClassStyle,

            modal_transition_name: this.getModaltranstionName
        }; 
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        
        return { util }; 
    }

}

export default BaseModalUIConfig;