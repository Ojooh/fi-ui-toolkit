
import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import StatusAlertUIUtil from "./status_alert_ui_util";

class StatusAlertUIController {
    constructor() {
        this.name       = "status_alert_ui_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new StatusAlertUIUtil(); 
    }

    // Method to return UI Components
    getUIComponents = () => { return {  }; };

    // Method to reurn UI Props
    getUIProps = () => { 
        return {
            visible: { type: Boolean, default: false, required: false },

            status_overlay_class_style: { type: String, default: "", required: false },

            alert_status_class_style_obj: { type: Object, default: {}, required: false },

            alert_status_icon_obj: { type: Object, default: {}, required: false },

            alert_status_text_style_obj: { type: Object, default: {}, required: false },

            alert_status: { type: String, required: false },

            alert_message: { type: String, required: false }
        } 
    }

    // Method to get UI State data
    getUIStateData = () => { 
        this.vm                     = getCurrentInstance();
        this.util.vm                = this.vm;

        return { util: this.util } 
    };

    // Method to get UI cmputed data
    getUIComputedData = () => { 
        return { 
            bg_class: this.util.getStatusClassStyle,

            animation_class: this.util.getAnimationClassStyle,

            status_icon: this.util.getStatusIcon,

            text_class_style: this.util.getTextClassStyle,

            close_btn_icon: this.util.getCloseButtonIcon
        }; 
    };

    // Method to get UI watchers
    getUIWatchers = () => { return { } };

    // Lifecycle method to handle on ui create logic
    handleOnCreatedLogic = () => {
        try {
            this.logger.log(`[Created] Component ${this.name} has been created`);
        } catch (error) {
            this.logger.error(`[Created] Error in Component ${this.name}:`, error);
        }
    };

    // Lifecycle method to handle on ui mounted logic
    handleOnMountedLogic = () => {
        try {
            this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

    // Lifecycle method to handle before ui unmounted logic
    handleBeforeUnmountedLogic = () => {
        try {
            this.logger.log(`[BeforeUnmount] Component ${this.name} will unmount`);
        } catch (error) {
            this.logger.error(`[BeforeUnmount] Error in component ${this.name}:`, error);
        }
    };

    // Method to retrun UI component definition
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
    }

}


export default new StatusAlertUIController().getUIComponentDefinition();