import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import DropdownUI           from "../../NavigationUI/DropdownUI/dropdown_ui.vue";
import CheckboxInputUI      from "../../FormUI/InputUI/checkbox_inpit_ui.vue";
import SVGIcons             from "../../Resources/svg_icon_resource";

class TableBodyUIConfig extends BaseConfig { 
    constructor() { super("table_body_ui_config"); }

    // Method to handle cloumn renderer props validator
    getColumnRendererValidator = (renderers) => {
        return renderers.every(renderer => {
            return ( 
                typeof renderer === "object" && typeof renderer.field === "string" &&
                (
                renderer.content === "plain" || 
                typeof renderer.content === "object" || 
                typeof renderer.content === "function" || 
                typeof renderer.content === "string"
                ) &&
                (
                !renderer.props ||
                typeof renderer.props === "object" ||
                typeof renderer.props === "function"
                )
            );
        });
    }

    // Method to get dropdown ui props
    getDropdownMenuProps = (record, record_index) => {
        const { 
            parent_class_style = "w-full h-full flex items-center justify-center",
            btn_class_style = "rounded-full p-2 cursor-pointer hover:bg-white hover:shadow-lg",
            menu_parent_class_style = "bg-white shadow-xl border border-gray-200 rounded-lg z-[10] w-44",
            menu_class_style = "",
            menu_list_class_style = "text-black",
            btn_id  = `table-row-${record_index}-action-btn`,
            menu_id  = `table-row-${record_index}-action-menu`,
            btn_content = `<span class='w-6 h-6 flex items-center'>${SVGIcons.vertical_elipsis_svg_icon}</span>`,
            menu_list = []
        } = this.vue_instance.props?.action_menu_props || {};

        const formatted_menu_list = menu_list.map(item => ({
            ...item,
            on_click: item?.on_click ? item.on_click.bind(null, record, record_index) : null
        }));
       
        return {
            parent_class_style, btn_class_style, menu_parent_class_style, 
            menu_class_style, menu_list_class_style, btn_id, menu_id, btn_content, menu_list: formatted_menu_list
        }
    }

    // Method to get select checkbox props
    getSelectCheckboxProps = (record, record_index) => {
        const { checkbox_id, onRecordRowSelected, is_selected } = this.vue_instance.props;

        const id                        = `${checkbox_id}_${record_index}`;
        const name                      = id;
        const value                     = is_selected?.(record, record_index) || false;
        const is_checked                = is_selected?.(record, record_index) || false;
        const handleInputClickEvent     = () => { return onRecordRowSelected?.(record, record_index); }
        const checkbox_props            = { id, name, value, is_checked, handleInputClickEvent };

        return { config: checkbox_props }
    }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui components
    getUIComponents() { return { DropdownUI, CheckboxInputUI }; }

    // Method to get ui props
    getUIProps() { 
        return {   
            table_body_class_style: { type: String, default: "", required: false },
            
            table_body_row_class_style: { type: String, default: "", required: false },

            table_body_cell_class_style: { type: String, default: "", required: false },

            records: { type: Array, default: [], required: true },

            has_action_menu: { type: Boolean, default: false },

            column_renderers: { type: Array, required: true, validator: this.getColumnRendererValidator },

            select_mode: { type: Boolean, default: false },

            is_selected: { type: Function, default: () => { return false }, required: false },

            checkbox_id: { type: String, default: "record_select", required: false },

            action_menu_props: { type: Object, default: {}, required: false },

            onRecordRowSelected: { type: Function, default: null, required: false }
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util                  = this.util;
        const select_checkbox_props = this.getSelectCheckboxProps;
        const get_dropdown_ui_props = this.getDropdownMenuProps;

        return { util, get_dropdown_ui_props, select_checkbox_props }; 
    }

}

export default TableBodyUIConfig;