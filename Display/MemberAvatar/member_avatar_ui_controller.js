
import LoggerUtil from "../../Logger/logger_util";

class MemberAvatarUIController {
    constructor() {
        this.name       = "image_text_ui";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() })
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => {        
        return {            
            parent_class_style: { type: String, default: "", required: false },

            avatar_circle_class_style: { type: String, default: "", required: false },

            img_link: { type: String, required: false, default: null },

            img_alt_text: { type: String, required: false, default: "" },

            img_class_style: { type: String, default: "", required: false },

            initials_class_style: { type: String, default: "", required: false },

            initials: { type: String, default: "", required: false },

            right_slot_class_style: { type: String, default: "", required: false },

            right_slot: { type: [Object, Function, String], default: null, required: false },

            right_slot_props: { type: Object, default: null, required: false }
        }
    }

    // State data
    getUIStateData = () => { return () => ({ }); };

    // Computed variables
    getUIComputedData = () => { return { }; };

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
            data: this.getUIStateData(),
            computed: this.getUIComputedData(),
            watch: this.getUIWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
        };
    };
}

export default new MemberAvatarUIController().getUIComponentDefinition();
