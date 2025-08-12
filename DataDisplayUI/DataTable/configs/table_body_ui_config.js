
import LoggerUtil from "../../../Logger/logger_util";
import DataTableUIUtil from "../utils/data_table_ui_util";
import SVGIcons from "../../../Resources/svg_icon_resource";

class TableBodyUIConfig {
    constructor() {
        this.name               = "table_body_ui_config"
        this.vue_instance       = null;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance       = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(this.vue_instance, this.content_manager);
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
        console.log({ record, record_index });
        const { 
            parent_class_style = "w-full h-full flex items-center justify-center",
            btn_class_style = "rounded-full p-2 cursor-pointer hover:bg-white hover:shadow-lg",
            menu_parent_class_style = "bg-white shadow-xl border border-gray-200 rounded-lg z-[10] w-44",
            menu_class_style = "",
            menu_list_class_style = "text-black",
            btn_id  = `table-row-${record_index}-action-btn`,
            menu_id  = `table-row-${record_index}-action-menu`,
            btn_content = `<span class='w-6 h-6 flex items-center'>${SVGIcons.vertical_elipsis_svg_icon}</span>`,
            getMenuList = null
        } = this.vue_instance.props?.action_menu_props || {};

        const menu_list = getMenuList ? getMenuList(record, record_index) : [];
       
        return {
            parent_class_style, btn_class_style, menu_parent_class_style, 
            menu_class_style, menu_list_class_style, btn_id, menu_id, btn_content, menu_list
        }
    }


    // Method to get state variables
    getStateVariables = () => {
        const util = this.util;

        const dropdown_ui_props = this.getDropdownMenuProps

        return { util, dropdown_ui_props }
    }

}

export default TableBodyUIConfig;