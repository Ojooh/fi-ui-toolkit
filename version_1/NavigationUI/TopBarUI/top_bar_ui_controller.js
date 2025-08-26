
import BaseController from "../../Base/base_controller";
import TopBarUIConfig from "./top_bar_ui_config";

class TopBarUIController extends BaseController { 
    constructor() { super("top_bar_ui", TopBarUIConfig); }

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

}

export default new TopBarUIController().getUIComponentDefinition();

