
import BaseConfig           from "../Base/base_config";

class FooterCopyRightUIConfig extends BaseConfig { 
    constructor() { super("footer_copu_right_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        const current_year = new Date().getFullYear().toString();

        return {
            class_style_text: { type: String, default: null, required: false },

            year: { type: String, default: current_year, required: false },

            powered_by_text: { type: String, required: true },

            author_text: { type: String, required: true },
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }
}

export default FooterCopyRightUIConfig;
