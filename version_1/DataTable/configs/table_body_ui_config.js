import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import SVGIcons             from "../../Resources/svg_icon_resource";

class TableBodyUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui state data
    getUIStateData() { 
        const select_checkbox_props = this.getSelectCheckboxProps;
        const get_dropdown_ui_props = this.getDropdownMenuProps;

        return { get_dropdown_ui_props, select_checkbox_props }; 
    }

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
        } = this.vue_instance?.proxy?.$props?.action_menu_props || {};

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
        const { checkbox_id, onRecordRowSelected, is_selected } = this.vue_instance.proxy.$props;

        const id                        = `${checkbox_id}_${record_index}`;
        const name                      = id;
        const value                     = is_selected?.(record, record_index) || false;
        const is_checked                = is_selected?.(record, record_index) || false;
        const handleInputClickEvent     = () => { return onRecordRowSelected?.(record, record_index); }
        const checkbox_props            = { id, name, value, is_checked, handleInputClickEvent };

        return { config: checkbox_props }
    }

}

export default TableBodyUIConfig;