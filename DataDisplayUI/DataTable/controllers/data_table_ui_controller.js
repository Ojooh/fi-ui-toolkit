
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../../Logger/logger_util";
import DataTableUIUtil from "../utils/data_table_ui_util";
import TableHeaderUI from "../table_header_ui.vue";
import TableBodyUI from "../table_body_ui.vue";

import DataTableUIConfig from "../configs/data_table_ui_config";

class DataTableUIController {
    constructor() {
        this.name           = "data_table_ui_controller";
        this.logger         = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.config         = new DataTableUIConfig();
    }

    // Public method to expose components
    getUIComponents = () => { return { TableHeaderUI, TableBodyUI}; };

    // Method to get ui props
    getUIProps = () => {        
        return {    
            id: { type: String, default: "Table", required: true },

            section_class_style: { type: String, default: "", required: false },

            lg_table_wrapper_class_style: { type: String, default: "", required: false },

            table_class_style: { type: String, default: "", required: false },

            header_props: { type: Object, default: {}, required: true },

            body_props: { type: Object, default: {}, required: true },

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
    getUIComputedData = () => { 
        return { section_id: this.config.getSectionId }; 
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
