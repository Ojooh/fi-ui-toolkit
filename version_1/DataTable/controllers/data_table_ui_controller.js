
import BaseController       from "../../Base/base_controller";
import DataTableUIConfig    from "../configs/data_table_ui_config";

import TableHeaderUI        from "../table_header_ui.vue";
import TableBodyUI          from "../table_body_ui.vue";
import XBarLoaderUI         from "../../LoaderUI/ListLoaderUI/x_bar_loader_ui.vue";
import HeaderTextUI         from "../../TextUI/header_text_ui.vue";

class DataTableUIController extends BaseController { 
    constructor() {
        super("data_table_ui", DataTableUIConfig);
    }

    // Method to get ui components
    getUIComponents() { 
        return { TableHeaderUI, TableBodyUI, XBarLoaderUI, HeaderTextUI }
    }

    // Method to get ui props
    getUIProps() { 
        return {   
            id: { type: String, default: "Table", required: true },
            
            section_class_style: { type: String, default: "", required: false },

            lg_table_wrapper_class_style: { type: String, default: "", required: false },

            table_class_style: { type: String, default: "", required: false },

            header_props: { type: Object, default: {}, required: true },

            body_props: { type: Object, default: {}, required: true },

            records: { type: Array, default: [], required: true },

            has_action_menu: { type: Boolean, default: false },

            select_mode: { type: Boolean, default: false },

            is_loading: { type: Boolean, default: false, required: false },

            no_data_content: { type: String, default: "", required: false },
        }
    }

    // Method to get ui computed data
    getUIComputedData() { return { section_id: this.config.getSectionId  }; }

}

export default new DataTableUIController().getUIComponentDefinition();
