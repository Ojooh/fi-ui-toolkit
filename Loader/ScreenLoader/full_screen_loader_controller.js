
import LoggerUtil from "../../Logger/logger_util";

class FullScreenLoaderController {
    constructor() {
        this.name       = "full_screen_loader_controller";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Method to return UI Components
    getUIComponents = () => { return {  }; };

    // Method to reurn UI Props
    getUIProps = () => { 
        return {
            visible: { type: Boolean, default: false, required: false },

            loader_overlay_class_style: { type: String, default: "", required: false },

            loader_content_class_style: { type: String, default: "", required: false },

            loader_content_symbol_class_style: { type: String, default: "", required: false },

            loader_content_symbol_object: { type: Object, default: { type: "img", src: ""}, required: true },

            loader_text: { type: String, default: "", required: false },

            loader_content_text_class_style: { type: String, default: "", required: false },
        } 
    }

    // Method to get UI State data
    getUIStateData = () => { return {} };

    // Method to get UI cmputed data
    getUIComputedData = () => { return { }; };

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


export default new FullScreenLoaderController().getUIComponentDefinition();