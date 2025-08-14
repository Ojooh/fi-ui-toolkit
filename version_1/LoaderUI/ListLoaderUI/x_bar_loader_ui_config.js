import BaseConfig           from "../../Base/base_config";

class XBarLoaderUIConfig extends BaseConfig { 
    constructor() { super("x_bar_loader_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        return {
            number_of_bars: { type: Number, default: 10, required: false }, 
        }; 
    }

}

export default XBarLoaderUIConfig;