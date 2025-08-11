
import { getCurrentInstance } from "vue";
import LoggerUtil from "../../Logger/logger_util";
import FeedbackToastUIUtil from "./feedback_toast_ui_util";

class FeedbackToastController {
    constructor() {
        this.name       = "feedback_toast_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
        this.util       = new FeedbackToastUIUtil();
    }

    // Method to return UI Components
    getUIComponents = () => { return {  }; };

    // Method to reurn UI Props
    getUIProps = () => { 
        return { 
            status: { type: String, required: false },

            message: { type: String, required: false },

            toast_class_style: { type: String, default: "", required: false },
        } 
    }

    // Method to get UI State data
    getUIStateData = () => { 
        this.vue_instance         = getCurrentInstance();
        this.util.vue_instance    = this.vue_instance;

        return {} 
    };

    // Method to get UI cmputed data
    getUIComputedData = () => { 
        return {
            border_class_tyle: this.util.getBorderStatusClassStyle,

            status_icon: this.util.getStatusIcon,

            icon_class_style: this.util.getStatusIconClassStyle,

            text_class_style: this.util.getStatusTextClassStyle,
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


export default new FeedbackToastController().getUIComponentDefinition();