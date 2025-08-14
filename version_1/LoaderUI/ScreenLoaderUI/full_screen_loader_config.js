import BaseConfig           from "../../Base/base_config";

class FullScreenLoaderUIConfig extends BaseConfig { 
    constructor() { super("full_screen_loader_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        return {
            visible: { type: Boolean, default: false, required: false },

            loader_overlay_class_style: { type: String, default: "", required: false },

            loader_content_class_style: { type: String, default: "", required: false },

            loader_content_symbol_class_style: { type: String, default: "", required: false },

            loader_content_symbol_object: { type: Object, default: { type: "img", src: ""}, required: true },

            loader_text: { type: String, default: "", required: false },

            loader_content_text_class_style: { type: String, default: "", required: false },
        }; 
    }

}

export default FullScreenLoaderUIConfig;