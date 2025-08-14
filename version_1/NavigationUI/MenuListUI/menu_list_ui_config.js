

import BaseConfig           from "../../Base/base_config";
import NavLinkUI            from "../NavLinkUI/nav_link_ui.vue";

class  MenuListUIConfig extends BaseConfig { 
    constructor() { super("menu_list_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui components
    getUIComponents() { return { NavLinkUI }; }

    // Method to get ui props
    getUIProps() { 
        return {
            // Class styles
            wrapper_class_style: { type: String, default: "", required: false },

            second_level_wrapper_class_style: { type: String, default: "pl-4 border-l border-gray-200", required: false },

            menus: { type: Array, required: true },
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }

}

export default MenuListUIConfig;