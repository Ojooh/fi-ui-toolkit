
import BaseConfig           from "../../Base/base_config";
import SectionUIUtil        from "./section_ui_util";

class SectionUIConfig extends BaseConfig { 
    constructor() { super("section_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new SectionUIUtil(vue_instance, this.content_manager)
    }

    // Method to get ui props
    getUIProps() { 
        return {
            wrapper_class_style: { type: String, default: "", required: false },

            section_id: { type: String, default: "", required: false },

            components: { type: Array, default: [], required: true },
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }
}

export default SectionUIConfig;