import type { PropType }            from "vue"
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";
import { NavLinkUIPropsInterface }  from "../../../types/props_builder_type";

const ui_class_styles       = ComponentClassStyles?.navigation_ui?.bread_crumb_ui;

const BreadCrumbUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    list_class_style: { type: String, default: ui_class_styles.list_class_style, required: false },

    list_item_class_style: { type: String, default: ui_class_styles.list_item_class_style, required: false },

    divider_class_style: { type: String, default: ui_class_styles.divider_class_style, required: false },

    divider_content: { type: String, default: "\\" },

    menu_list: { type: Array as PropType<NavLinkUIPropsInterface[]>,  default: () => [], required: true}
}

export default BreadCrumbUIProps;