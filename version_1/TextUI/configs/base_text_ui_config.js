import BaseConfig           from "../../Base/base_config.js";
import TextUIUtil           from "../utils/text_ui_util.js";

class BaseTextUIConfig extends BaseConfig { 
    constructor() { super("base_text_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new TextUIUtil(vue_instance, this.content_manager);
    }

    getUIProps() { 
        return { 
            text_class_style: { type: String, default: "", required: false },

            text_content: { type: String, default: "", required: false },
        }; 
    }

    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default BaseTextUIConfig;