

import BaseInputUIController from "./base_input_ui_controller";

class PasswordInputUIController extends BaseInputUIController {
    constructor () {
        const name              = "password_input_ui";
        const config_default    = PasswordInputUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun password  default config
    static #getDefaultConfig = () => {
        return {
            id: "password_id", name: "password", value: null, placeholder: null, required: false, input_class_style: null, 
            
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        }
    }

}

export default new PasswordInputUIController().getUIComponentDefinition();