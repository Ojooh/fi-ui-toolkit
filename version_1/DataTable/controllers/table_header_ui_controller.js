
import BaseController       from "../../Base/base_controller";
import TableHeaderUIConfig  from "../configs/table_header_ui_config";

import CheckboxInputUI      from "../../FormUI/InputUI/checkbox_inpit_ui.vue";

class TableHeaderUIController extends BaseController { 
    constructor() { super("table_header_ui", TableHeaderUIConfig); }

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

    // Method to get computed data
    getUIComputedData() { 
        return {
            select_all_checkbox_props: this.config.getSelectAllCheckboxProps,
        }; 
    }

}

export default new TableHeaderUIController().getUIComponentDefinition();
