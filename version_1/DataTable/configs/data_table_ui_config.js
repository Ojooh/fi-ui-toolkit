
import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import TableHeaderUI        from "../table_header_ui.vue";
import TableBodyUI          from "../table_body_ui.vue";

class DataTableUIConfig extends BaseConfig { 
    constructor() { super("table_header_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

     // Method to get section id
    getSectionId = (instance_variables) => { return `${instance_variables?.id}DataTable`}

    // Method to get table header props
    getTableHeaderProps = () => { 
        const { header_props, has_action_menu, select_mode } = this.vue_instance.props; 

        return { ...header_props, has_action_menu, select_mode };
    }

    // Method to get table body props
    getTableBodyProps = () => { 
        const { body_props, has_action_menu, select_mode  } = this.vue_instance.props; 

        return { ...body_props, has_action_menu, select_mode };
    }

    // Method to get ui components
    getUIComponents() { 
        // const TableHeaderUI = defineAsyncComponent(() => import("../table_header_ui.vue"));
        // const TableBodyUI   = defineAsyncComponent(() => import("../table_body_ui.vue"));

        return { TableHeaderUI, TableBodyUI }
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

            has_action_menu: { type: Boolean, default: false },

            select_mode: { type: Boolean, default: false },
        }
    }

    // Method to get ui computed data
    getUIComputedData() { return { section_id: this.getSectionId  }; }

    // Method to get ui state data
    getUIStateData() { 
        const util                  = this.util;
        const table_header_props    = this.getTableHeaderProps();
        const table_body_props      = this.getTableBodyProps();

        return { util, table_header_props, table_body_props }
    }

}

export default DataTableUIConfig;