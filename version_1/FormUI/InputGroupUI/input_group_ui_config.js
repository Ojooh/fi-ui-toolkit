import BaseConfig           from "../../Base/base_config";
import InputGroupUIUtil     from "./input_group_ui_util";

class inputGroupUIConfig extends BaseConfig { 
    constructor() { super("input_group_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputGroupUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        return {
            input_group_class_style: { type: String, required: false, default: null },

            label_config: { type: Object, required: true },

            input_config: { type: Object, required: true },
        }; 
    }

    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default inputGroupUIConfig;