
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../../Logger/logger_util";
import ModalSidebarUIUtil from "./modal_sidebar_ui_util";
import NavLinkUI from "../../NavLinkUI/nav_link_ui.vue";

class ModalSidebarUIController {
    constructor() {
        this.name       = "modal_sidebar_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new ModalSidebarUIUtil();
    }

    // Public method to expose components
    getUIComponents = () => { return { NavLinkUI }; };

    // Method to get ui props
    getUIProps = () => {        
        return { 
            overlay_class_style: { type: String, default: "", required: false },

            sidebar_class_style: { type: String, default: "", required: false },

            section_1_class_style: { type: String, default: "", required: false },

            section_2_class_style: { type: String, default: "", required: false },

            show: { type: Boolean, default: false },
            
            position: { type: String, default: "right", validator: (val) => ["left", "right"].includes(val) },

            section_1_component: { type: Object, default: null, required: false },

            section_1_props: { type: Object, default: null, required: false },

            section_2_component: { type: Object, default: null, required: false },

            section_2_props: { type: Object, default: null, required: false },

            close_sidebar: { type: Function, default: null, required: false },
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
            position_class_style: this.util.getPositionClassStyle,

            show_class_style: this.util.getShowClassStyle,
        };
    };

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

export default new ModalSidebarUIController().getUIComponentDefinition();
