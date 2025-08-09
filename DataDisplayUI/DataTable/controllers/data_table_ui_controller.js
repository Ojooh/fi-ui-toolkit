
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../../Logger/logger_util";
import DataTableUIUtil from "../utils/data_table_ui_util";
import TableHeaderUI from "../table_header_ui.vue";
import TableBodyUI from "../table_body_ui.vue";


class DataTableUIController {
    constructor() {
        this.name       = "data_table_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new DataTableUIUtil();
    }

    // Public method to expose components
    getUIComponents = () => { return { TableHeaderUI, TableBodyUI}; };

    // Method to get ui props
    getUIProps = () => {        
        return {    
            section_class_style: { type: String, default: "", required: false },

            lg_table_wrapper_class_style: { type: String, default: "", required: false },

            table_class_style: { type: String, default: "", required: false },

             table_head_class_style: { type: String, default: "", required: false },

            table_head_cell_class_style: { type: String, default: "", required: false },

            table_body_class_style: { type: String, default: "", required: false },

            table_body_row_class_style: { type: String, default: "", required: false },

            table_body_cell_class_style: { type: String, default: "", required: false },

            id: { type: String, default: "DataTable", require: true },

            column_headers: { type: Array, default: [], required: true },

            action_col_text: { type: String, default: "Action", required: false },

            index_col_text: { type: String, default: "#", required: false },

            records: { type: Array, default: [], required: true },

            column_renderers: { type: Array, required: true, validator: this.util.columnRendererValidator },

            has_action_menu: { type: Boolean, default: false }
        }
    }

    // State data
    getUIStateData = () => { 
        this.vm = getCurrentInstance();
        this.util.setVueInstance(this.vm);

        const util = this.util;

        const table_header_props    = this.util.getTableHeaderProps();
        const table_body_props      = this.util.getTableBodyProps();

        return { util, table_header_props, table_body_props }
     };

    // Computed variables
    getUIComputedData = () => { 
        return {
            section_id: this.util.getSectionId
        }; 
    }

    // Watchers
    getUIWatchers = () => { return { } };

    // Lifecycle: created
    handleOnCreatedLogic = () => {
        try {
            this.logger.log(`[Created] Component ${this.name} has been created`);
        } catch (error) {
            this.logger.error(`[Created] Error in Component ${this.name}:`, error);
        }
    };

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

    // Lifecycle: beforeUnmount
    handleBeforeUnmountedLogic = () => {
        try {
            this.logger.log(`[BeforeUnmount] Component ${this.name} will unmount`);
        } catch (error) {
            this.logger.error(`[BeforeUnmount] Error in component ${this.name}:`, error);
        }
    };

    // Get final Vue component definition
    getUIComponentDefinition = () => {
        return {
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getUIStateData,
            computed: this.getUIComputedData(),
            watch: this.getUIWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
        };
    };
}

export default new DataTableUIController().getUIComponentDefinition();
