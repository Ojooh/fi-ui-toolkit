
import BaseConfig           from "../../Base/base_config";
import ModalSidebarUIUtil   from "./modal_sidebar_ui_util";

class  ModalSidebarUIConfig extends BaseConfig { 
    constructor() { super("top_bar_ui_config"); }

    // Method to get position class style
    getPositionClassStyle = (instance_variable) => {
        const { position } = instance_variable;
        return position === "right" ? "right-0" : "left-0"
    }

    // Method to get show class style
    getShowClassStyle = (instance_variable) => {
        const { position, show } = instance_variable;
        return show ? "translate-x-0" : (position === "right" ? "translate-x-full" : "-translate-x-full");
    }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new ModalSidebarUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui components
    getUIComponents() { return {}; }

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
            position_class_style: this.getPositionClassStyle,

            show_class_style: this.getShowClassStyle,
        };
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

}

export default ModalSidebarUIConfig;