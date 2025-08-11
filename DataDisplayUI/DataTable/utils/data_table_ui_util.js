
import LoggerUtil from "../../../Logger/logger_util";
import SVGIcons from "../../../Resources/svg_icon_resource";

class DataTableUIUtil {
    constructor () {
        this.name               = "data_table_ui_util"
        this.vue_instance                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance                 = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get section id
    getSectionId = (instance_variables) => { return `${instance_variables?.id}DataTable`}

    // Method to get table header props
    getTableHeaderProps = () => {
        const { 
            table_head_class_style, table_head_cell_class_style, action_col_text, index_col_text,
            column_headers, has_action_menu 
        } = this.vue_instance.props;

        return { 
            table_head_class_style, table_head_cell_class_style, action_col_text, index_col_text,
            column_headers, has_action_menu  
        };
    }

    // Method to get caret up svg icon
    getCaretUpIcon = (instance_variables) => { return SVGIcons.trinagular_caret_up_svg_icon }

    // Method to get caret down svg icon
    getCaretDownIcon = (instance_variables) => { return SVGIcons.trinagular_caret_down_svg_icon }

    // Method to get table body props
    getTableBodyProps = () => {
        const { 
            table_body_class_style, table_body_row_class_style, table_body_cell_class_style, records, has_action_menu, column_renderers,
        } = this.vue_instance.props;

        return { table_body_class_style, table_body_row_class_style, table_body_cell_class_style, records, has_action_menu, column_renderers }
    }

    // Method to handle cloumn renderer props validator
    columnRendererValidator = (renderers) => {
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
        const parent_class_style        = " w-full h-full flex items-center justify-center";
        const btn_class_style           = "rounded-full p-2 cursor-pointer hover:bg-white hover:shadow-lg";
        const menu_parent_class_style   = "bg-white shadow-xl border border-gray-200 rounded-lg";
        const menu_class_style          = "";
        const menu_list_class_style     = "";
        const btn_id                    = `table-row-${record_index}-action-btn`;
        const menu_id                   = `table-row-${record_index}-action-menu`;
        const btn_content               = `<span class='w-6 h-6 flex items-center'>${SVGIcons.vertical_elipsis_svg_icon}</span>`;
        const menu_list                 = []

        return {
            parent_class_style, btn_class_style, menu_parent_class_style, 
            menu_class_style, menu_list_class_style, btn_id, menu_id, btn_content, menu_list
        }
    }
}

export default DataTableUIUtil;