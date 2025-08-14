
import BaseConfig           from "../../Base/base_config";
import DropdownUIUtil       from "./dropdown_ui_util";
import NavLinkUI            from "../NavLinkUI/nav_link_ui.vue";

class  DropdownUIConfig extends BaseConfig { 
    constructor() { super("dropdown_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DropdownUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui components
    getUIComponents() { return { NavLinkUI }; }

    // Method to get ui props
    getUIProps() { 
        return {
            parent_class_style: { type: String, default: "", required: false },

            btn_class_style: { type: String, default: "", required: false },

            menu_parent_class_style: { type: String, default: "", required: false },

            menu_class_style: { type: String, default: "", required: false },

            menu_list_class_style: { type: String, default: "", required: false },

            btn_id: { type: String, required: true },

            menu_id: { type: String, required: true },

            btn_content: { type: String, required: true },

            menu_list: { type: Array, required: true, default: [] },
        }
    }
    
    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

}

export default DropdownUIConfig;