
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../../Logger/logger_util";
import SortableHeaderCellUIConfig from "../configs/sortable_header_cell_ui_config";


class SortableHeaderCellUIController {
    constructor() {
        this.name       = "sortable_header_cell_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.config       = new SortableHeaderCellUIConfig();
    }

    // Public method to expose components
    getUIComponents = () => { return { }; };

    // Method to get ui props
    getUIProps = () => {        
        return {   
            wrapper_class_style: { type: String, default: "", required: false },

            title_class_style: { type: String, default: "", required: false },

            active_icon_class_style: { type: String, default: "", required: false },

            inactive_icon_class_style: { type: String, default: "", required: false },

            id: { type: String, required: true },

            title_text: { type: String, required: true },

            current_order_direction_value: { type: String, default: null }, // 'asc' | 'desc' | null

            toggleSort: { type: Function, required: true }
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
        return {
            caret_up_svg_icon: this.config.getCaretUpIcon,

            caret_down_svg_icon: this.config.getCaretDownIcon,
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

export default new SortableHeaderCellUIController().getUIComponentDefinition();
