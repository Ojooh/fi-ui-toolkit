
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../../version_1/Logger/logger_util";
import TableHeaderUIConfig from "../configs/table_header_ui_config";


class TableHeaderUIController {
    constructor() {
        this.name       = "table_header_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.config     = new TableHeaderUIConfig();
    }

    // Public method to expose components
    getUIComponents = () => { return { }; };

    // Method to get ui props
    getUIProps = () => {        
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

    // State data
    getUIStateData = () => { 
        this.vue_instance = getCurrentInstance();
       
        this.config.setVueInstance(this.vue_instance);

        const state_variables = this.config.getStateVariables();

        return { ...state_variables };
    };

    // Computed variables
    getUIComputedData = () => {  return {}; }

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

export default new TableHeaderUIController().getUIComponentDefinition();
