

import { getCurrentInstance } from "vue";

import LoggerUtil                   from "../../Logger/logger_util";
import RegisteredAppsViewUIConfig   from "../configs/action_button_ui_config";


class ActionButtonUIController {
    constructor() {
        this.name       = "action_button_ui";
        this.config     = new RegisteredAppsViewUIConfig();
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() }); 
    }

    // Method to return UI Components
    getUIComponents = () => { return { }; };

    // Method to reurn UI Props
    getUIProps = () => { 
        return { 
            config: { type: Object, required: true, default: {} }
        } 
    }

    // Method to get UI State data
    getUIStateData = () => { 
        this.vue_instance = getCurrentInstance();

        this.config.setVueInstance(this.vue_instance);

        const state_variables = this.config.getStateVariables();

        return { ...state_variables };
    }

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


// class ActionButtonUIController extends BaseButtonUIController {
//     constructor () {
//         const config_default    = ActionButtonUIController.#getDefaultConfig();

//         super(name, config_default);
//     }

//     // method to retrun text area default config
//     static #getDefaultConfig = () => {
//         return {
//             btn_type: "button", class_style: null, btn_text: null, handleClickEvent: null
//         }
//     }

//     // Get final Vue component definition
//     getUIComponentDefinition = () => {
//         return {
//             components: this.getUIComponents(),
//             props: this.getUIProps(),
//             data: this.getUIStateData,
//             computed: this.getUIComputedData(),
//             watch: this.getUIWatchers(),
//             created: this.handleOnCreatedLogic,
//             mounted: this.handleOnMountedLogic,
//             beforeUnmount: this.handleBeforeUnmountedLogic,
//             methods: this.util?.getActionBtnUtilMethods()
//         };
//     };

// }

export default new ActionButtonUIController().getUIComponentDefinition();