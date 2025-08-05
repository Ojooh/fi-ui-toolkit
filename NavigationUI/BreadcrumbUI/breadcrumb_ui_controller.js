
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import BreadcrumbUIUtil from "./breadcrumb_ui_util";


class BreadcrumbUIController {
    constructor() {
        this.name       = "breadcrumb_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new BreadcrumbUIUtil();
    }

    // Public method to expose components
    getUIComponents = () => { return { }; };

    // Method to get ui props
    getUIProps = () => {        
        return {    
            wrapper_class_style: { type: String, default: "", required: false },

            link_class_style:  { type: String, default: "text-sm font-medium text-gray-700 hover:text-blue-600", required: false },

            text_class_style:  { type: String, default: "text-sm font-medium text-gray-500", required: false },

            divider_class_style:  { type: String, default: "px-2 text-gray-400", required: false },

            // [{ text: "Home", link: "/" }, { text: "Settings" }]
            items: { type: Array, required: true },
            
            // or "-", ".", "›", etc.
            divider: { type: String, default: "\\" },

            // start | center | end
            align: { type: String, default: "start",  validator: (val) => ["start", "center", "end"].includes(val) }
        }
    }

    // State data
    getUIStateData = () => { 
        this.vm = getCurrentInstance();
        this.util.setVueInstance(this.vm);

        const util = this.util;

        return { util }
     };

    // Computed variables
    getUIComputedData = () => { 
        return {
            alignment_class_style: this.util.getAlignmentClassStyle
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

export default new BreadcrumbUIController().getUIComponentDefinition();
