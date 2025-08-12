
import LoggerUtil from "../../../Logger/logger_util";
import DataTableUIUtil from "../utils/data_table_ui_util";

class DataTableUIConfig {
    constructor() {
        this.name               = "data_table_ui_config"
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

    // Method to get section id
    getSectionId = (instance_variables) => { return `${instance_variables?.id}DataTable`}

    // Method to get table header props
    getTableHeaderProps = () => { 
        const { header_props, has_action_menu } = this.vue_instance.props; 

        return { ...header_props, has_action_menu };
    }

    // Method to get table body props
    getTableBodyProps = () => { 
        const { body_props, has_action_menu } = this.vue_instance.props; 

        return { ...body_props, has_action_menu };
    }

    // Method to get state variables
    getStateVariables = () => {
        const util = this.util;
        const table_header_props    = this.getTableHeaderProps();
        const table_body_props      = this.getTableBodyProps();

        return { util, table_header_props, table_body_props }
    }

}

export default DataTableUIConfig;