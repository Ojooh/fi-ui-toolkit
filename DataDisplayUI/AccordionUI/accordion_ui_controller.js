import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import AccordionUIUtil from "./accordion_ui_util";

import SVGIcons from "../../Resources/svg_icon_resource";


class AccordionUIController{
    constructor() {
        this.name       = "accordion_ui";
        this.vue_instance         = null; 
        this.util       = null;
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => {        
        return {
            id: { type: String, default: "id", required: true },

            group_id: { type: String, required: true },

            accordion_class_style: { type: String, default: null, required: false },

            accordion_head_id: { type: String, default: "head_id", required: true },

            accordion_head_class_style: { type: String, default: null, required: false },

            accordion_head_show_class_style: { type: String, default: null, required: false },

            accordion_head_title_content: { type: String, required: true },

            accordion_head_title_class_style: { type: String, default: null, required: false },

            accordion_head_btn_class_style: { type: String, default: null, required: false },

            accordion_head_btn_icon: { type: String, default: SVGIcons?.plus_svg_icon, required: false },

            accordion_body_id: { type: String, default: "body_id", required: true },

            accordion_body_class_style: { type: String, default: null, required: false },

            accordion_body_show_class_style: { type: String, default: null, required: false },
        }
    }

    // State data
    getUIStateData = () => {
        this.vue_instance         = getCurrentInstance();
        this.util       = new AccordionUIUtil(this.name, this.vue_instance);
        return { util: this.util } 
    };

    // Computed variables
    getUIComputedData = () => { return { }; };

    // Watchers
    getUIWatchers = () => { return { } };

    // Lifecycle: created
    handleOnCreatedLogic = () => {
        try {
            this.logger .log(`[Created] Component ${this.name} has been created`);
        } catch (error) {
            this.logger .error(`[Created] Error in Component ${this.name}:`, error);
        }
    };

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            this.logger .log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger .error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

    // Lifecycle: beforeUnmount
    handleBeforeUnmountedLogic = () => {
        try {
            this.logger .log(`[BeforeUnmount] Component ${this.name} will unmount`);
        } catch (error) {
            this.logger .error(`[BeforeUnmount] Error in component ${this.name}:`, error);
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

export default new AccordionUIController().getUIComponentDefinition();