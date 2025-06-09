import { getCurrentInstance } from "vue";

import InputGroupUIUtil from "./input_group_ui_util";

class InputGroupUIController {
    constructor (name, input_default_config) {
        this.name                   = name;
        this.input_default_config   = input_default_config
        this.vm                     = null; 
        this.util                   = new InputGroupUIUtil(this.name, this.vm);
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => { 
        return {
            input_group_class_style: { type: String, required: false, default: null },

            label_config: { type: Object, required: true },

            input_config: { type: Object, required: true },
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

export default new InputGroupUIController().setVueJson()