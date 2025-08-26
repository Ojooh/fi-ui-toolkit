

import BaseController   from "../../Base/base_controller";
import DropdownUIConfig from "./dropdown_ui_config";
import NavLinkUI        from "../NavLinkUI/nav_link_ui.vue";


class DropdownUIController extends BaseController { 
    constructor() { super("dropdown_ui", DropdownUIConfig); }

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
}

export default new DropdownUIController().getUIComponentDefinition();
