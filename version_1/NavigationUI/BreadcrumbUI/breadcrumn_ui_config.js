
import BaseConfig           from "../../Base/base_config";

class BreadcrumbUIConfig extends BaseConfig { 
    constructor() { super("breadcrumb_ui_config"); }

    // Method to get alignment class style
    getAlignmentClassStyle = (instance_variable) => {
        const { align  } = instance_variable;

        if(align === "start") { return "justify-start" }

        else if(align === "center") { return "justify-center" }

        else if(align === "end") { return "justify-end" }

        else { return "justify_start" }

    }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

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

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            alignment_class_style: this.getAlignmentClassStyle
        }; 
    }

}

export default BreadcrumbUIConfig;