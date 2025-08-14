
import BaseConfig           from "../../Base/base_config";

class TopBarUIConfig extends BaseConfig { 
    constructor() { super("top_bar_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        const config_default = { bg_color: "#052146", has_shadow: true, height: 62 };
        
        return {
            top_bar_class_style: { type: String, default: "", required: false },

            config: { type: Object, default: config_default, required: false },

            section_1_component: {type: Object, default: null, required: false },

            section_1_props: { type: Object, default: null, required: false },

            section_2_component: {type: Object, default: null, required: false },

            section_2_props: { type: Object, default: null, required: false },

            section_3_component: {type: Object, default: null, required: false },

            section_3_props: { type: Object, default: null, required: false }
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

}

export default TopBarUIConfig;