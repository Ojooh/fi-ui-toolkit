import type { PropType }        from 'vue'
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

import NavLinkUIProps from "../NavLinkUI/nav_link_ui_props";

const ui_class_styles       = ComponentClassStyles?.navigation_ui?.menu_list_ui;

const MenuListUIProps   = {
    id: { type: String, required: true },

    parent_id: { type: String, required: true },

    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    list_class_style: { type: String, default: ui_class_styles.list_class_style, required: false },

    list_item_class_style: { type: String, default: ui_class_styles.list_item_class_style, required: false },

    menu_list: { type: Array as PropType<Array<Partial<typeof NavLinkUIProps>>>,  default: () => [], required: true}
}

export default MenuListUIProps;