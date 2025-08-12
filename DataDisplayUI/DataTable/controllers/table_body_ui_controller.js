
import { getCurrentInstance } from "vue";

import LoggerUtil           from "../../../Logger/logger_util";
import DropdownUI           from "../../../NavigationUI/DropdownUI/dropdown_ui.vue";
import TableBodyUIConfig    from "../configs/table_body_ui_config";


class TableBodyUIController {
    constructor() {
        this.name       = "table_body_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.config     = new TableBodyUIConfig();
    }

    // Public method to expose components
    getUIComponents = () => { return { DropdownUI }; };

    // Method to get ui props
    getUIProps = () => {   

        return {    
            table_body_class_style: { type: String, default: "", required: false },

            table_body_row_class_style: { type: String, default: "", required: false },

            table_body_cell_class_style: { type: String, default: "", required: false },

            records: { type: Array, default: [], required: true },

            has_action_menu: { type: Boolean, default: false },

            column_renderers: { type: Array, required: true, validator: this.config.getColumnRendererValidator },

            action_menu_props: { type: Object, default: {}, required: false }
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
    getUIComputedData = () => { return {}; }

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

export default new TableBodyUIController().getUIComponentDefinition();
