import BaseConfig           from "../../../Base/base_config";
import InputUIUtil          from "../utils/input_ui_util";

class SwitchInputUIConfig extends BaseConfig { 

    constructor() { super("switch_input_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        const input_ui_default_config = {
            id: "switch_id", name: "switch", value: null, is_loading: false, required: false,

            wrapper_class_style: "", loader_class_style: "", btn_class_style: "", label_text_class_style: "",

            knob_class_style: "", active_class_style: "bg-blue-300", active_class_style: "bg-gray-900",
            
            label_text: null, loader_content: null, handleSwitchToggle: null
        };

        return { config: { type: Object, default: input_ui_default_config, required: true } }; 
    }

    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default SwitchInputUIConfig;