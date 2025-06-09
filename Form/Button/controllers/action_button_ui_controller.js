

import BaseButtonUIController from "./base_button_ui_controller";

class ActionButtonUIController extends BaseButtonUIController {
    constructor () {
        const name              = "action_button_ui";
        const config_default    = ActionButtonUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun text area default config
    static #getDefaultConfig = () => {
        return {
            btn_type: "button", class_style: null, btn_text: null, handleInputClickEvent: null
        }
    }

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
            methods: this.util.getActionBtnUtilMethods()
        };
    };

}

export default new ActionButtonUIController().setVueJson();