import LoggerUtil from "../../Logger/logger_util";

class TopBarUIController {
    constructor() {
        this.name       = "top_bar_ui";
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => {
        const config_default = { bg_color: "#052146", has_shadow: true, height: 62 };
        
        return {
            config: { type: Object, default: config_default, required: false },

            section_1_component: {type: Object, default: null, required: false },

            section_1_props: { type: Object, default: null, required: false },

            section_2_component: {type: Object, default: null, required: false },

            section_2_props: { type: Object, default: null, required: false },

            section_3_component: {type: Object, default: null, required: false },

            section_3_props: { type: Object, default: null, required: false }
        }
    }

    // State data
    getAppStateData = () => { return () => ({ }); };

    // Computed variables
    getAppComputedVariables = () => { return { }; };

    // Watchers
    getAppWatchers = () => { return { } };

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
    setVueJson = () => {
        return {
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getAppStateData(),
            computed: this.getAppComputedVariables(),
            watch: this.getAppWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
        };
    };
}

export default new TopBarUIController().setVueJson();