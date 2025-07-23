
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import NavLinkUIUtil from "./nav_link_ui_util"

class NavLinkUIController {
    constructor() {
        this.name       = "dropdown_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new NavLinkUIUtil();
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => {        
        return {    
            // Class styles
            wrapper_class_style: { type: String, default: "", required: false },

            icon_parent_class_style: { type: String, default: "", required: false },

            icon_img_class_style: { type: String, default: "", required: false },

            svg_icon_class_style: { type: String, default: "", required: false },

            content_class_style: { type: String, default: "", required: false },
    
            link: { type: String, default: null, required: false },

            icon_img_link: { type: String, default: null, required: false },

            icon_img_alt_text: { type: String, default: "", required: false },

            svg_icon: { type: String, default: null, required: false },

            html_content: { type: String, default: "", required: false },

            on_click: { type: Function, default: null, required: false },
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
            is_router_link: this?.util?.isRouterLink,

            is_anchor: this?.util?.isAnchor,

            component_type: this?.util?.componentType
        }
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

export default new NavLinkUIController().getUIComponentDefinition();
