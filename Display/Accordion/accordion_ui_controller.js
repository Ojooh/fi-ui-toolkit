import { getCurrentInstance } from "vue";

import SVGIcons from "../../Resources/svg_icon_resource";
import AccordionUIUtil from "./accordion_ui_util";

class AccordionUIController{
    constructor() {
        this.name   = "accordion_ui";
        this.vm     = null; 
        this.util   = new AccordionUIUtil(this.name, this.vm)

    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => {        
        return {
            id: { type: String, default: "id", required: true },

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
    getAppStateData = () => {
        this.vm         = getCurrentInstance();
        this.util.vm    = this.vm;
        return { } 
    };

    // Computed variables
    getAppComputedVariables = () => { return { }; };

    // Watchers
    getAppWatchers = () => { return { } };

    // Lifecycle: created
    handleOnCreatedLogic = () => {
        try {
            console.log(`[Created] Component ${this.name} has been created`);
        } catch (error) {
            console.error(`[Created] Error in Component ${this.name}:`, error);
        }
    };

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            console.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            console.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

    // Lifecycle: beforeUnmount
    handleBeforeUnmountedLogic = () => {
        try {
            console.log(`[BeforeUnmount] Component ${this.name} will unmount`);
        } catch (error) {
            console.error(`[BeforeUnmount] Error in component ${this.name}:`, error);
        }
    };

    // Get final Vue component definition
    setVueJson = () => {
        return {
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getAppStateData,
            computed: this.getAppComputedVariables(),
            watch: this.getAppWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
            methods: this.util.getUtilMethods()
        };
    };
}

export default new AccordionUIController().setVueJson();