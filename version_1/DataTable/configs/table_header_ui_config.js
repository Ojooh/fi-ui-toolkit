import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import CheckboxInputUI      from "../../FormUI/InputUI/checkbox_inpit_ui.vue";

class TableHeaderUIConfig extends BaseConfig { 
    constructor() { super("table_header_ui_config"); }

    // Method to get select checkbox props
    getSelectAllCheckboxProps = () => {
        const { checkbox_id, onRecordRowsSelected, is_selected } = this.vue_instance.props;

        const id                        = `${checkbox_id}`;
        const name                      = id;
        const value                     = is_selected?.() || false;
        const is_checked                = is_selected?.() || false;
        const handleInputClickEvent     = onRecordRowsSelected ? onRecordRowsSelected : null;
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
    getUIComponents() { return { CheckboxInputUI }; }

    // Method to get ui props
    getUIProps() { 
        return {   
            table_head_class_style: { type: String, default: "", required: false },
            
            table_header_row_class_style: { type: String, default: "", required: false },

            table_head_cell_class_style: { type: String, default: "", required: false },

            action_col_text: { type: String, default: "Action", required: false },

            index_col_text: { type: String, default: "#", required: false },

            column_headers: { type: Array, default: [], required: true },

            has_action_menu: { type: Boolean, default: false },

            select_mode: { type: Boolean, default: false },

            is_selected: { type: Function, default: () => { return false }, required: false },

            checkbox_id: { type: String, default: "select_all", required: false },

            onRecordRowsSelected: { type: Function, default: null, required: false }
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        const select_all_checkbox_props = this.getSelectAllCheckboxProps();

        return { util, select_all_checkbox_props }; 
    }

}

export default TableHeaderUIConfig;