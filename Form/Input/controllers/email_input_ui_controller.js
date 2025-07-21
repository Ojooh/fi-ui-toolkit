

import BaseInputUIController from "./base_input_ui_controller";

class EmailInputUIController extends BaseInputUIController {
    constructor () {
        const name              = "email_input_ui";
        const config_default    = EmailInputUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun email  default config
    static #getDefaultConfig = () => {
        return {
            id: "email_id", name: "email", value: null, placeholder: null,  required: false, input_class_style: null, 
            
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        }
    }

}

export default new EmailInputUIController().getUIComponentDefinition();