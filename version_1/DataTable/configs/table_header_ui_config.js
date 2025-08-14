import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";

class TableHeaderUIConfig extends BaseConfig { 
    constructor() { super("table_header_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        return {   
            table_head_class_style: { type: String, default: "", required: false },
            
            table_header_row_class_style: { type: String, default: "", required: false },

            table_head_cell_class_style: { type: String, default: "", required: false },

            action_col_text: { type: String, default: "Action", required: false },

            index_col_text: { type: String, default: "#", required: false },

            column_headers: { type: Array, default: [], required: true },

            has_action_menu: { type: Boolean, default: false }
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default TableHeaderUIConfig;