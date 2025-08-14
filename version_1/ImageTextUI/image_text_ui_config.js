
import BaseConfig           from "../Base/base_config";

class ImageTextUIConfig extends BaseConfig { 
    constructor() { super("image_text_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        return {
            text: { type: String, required: false, default: null },
            
            text_class: { type: String, default: "text-black" },

            image_src: { type: String, required: false, default: null },

            img_alt: { type: String, required: false, default: null },

            img_class_style: { type: String, required: false, default: "" },

            wrapper_class_style: { type: String, required: false, default: "" },
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }
}

export default ImageTextUIConfig;