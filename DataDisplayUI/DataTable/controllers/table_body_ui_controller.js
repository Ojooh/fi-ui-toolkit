
import { getCurrentInstance } from "vue";

import LoggerUtil           from "../../../Logger/logger_util";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import DropdownUI           from "@ui/NavigationUI/DropdownUI/dropdown_ui.vue";


class TableBodyUIController {
    constructor() {
        this.name       = "table_body_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new DataTableUIUtil();
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

            column_renderers: { type: Array, required: true, validator: this.util.columnRendererValidator }
        }
    }

    // State data
    getUIStateData = () => { 
        this.vue_instance = getCurrentInstance();
        this.util.setVueInstance(this.vue_instance);

        const util              = this.util;
        const dropdown_ui_props = this.util.getDropdownMenuProps

        return { util, dropdown_ui_props }
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

export default new TableBodyUIController().getUIComponentDefinition();
