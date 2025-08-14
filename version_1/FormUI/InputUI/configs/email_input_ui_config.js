import BaseConfig           from "../../../Base/base_config";
import InputUIUtil          from "../utils/input_ui_util";

class EmailInputUIConfig extends BaseConfig { 
    constructor() { super("email_input_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        const input_ui_default_config = {
            id: "email_id", name: "email", value: null, placeholder: null, required: false, input_class_style: null, 
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        };

        return { config: { type: Object, default: input_ui_default_config, required: true }}; 
    }

    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default EmailInputUIConfig;