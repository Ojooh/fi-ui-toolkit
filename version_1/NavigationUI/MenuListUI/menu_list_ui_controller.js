
import BaseController       from "../../Base/base_controller";
import MenuListUIConfig     from "./menu_list_ui_config";

import NavLinkUI            from "../NavLinkUI/nav_link_ui.vue";

class MenuListUIController extends BaseController { 
    constructor() { super("menu_list_ui", MenuListUIConfig); }

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
}

export default new MenuListUIController().getUIComponentDefinition();
