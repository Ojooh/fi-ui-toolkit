

import BaseInputUIController from "./base_input_ui_controller";

class TextInputUIController extends BaseInputUIController {
    constructor () {
        const name              = "text_input_ui";
        const config_default    = TextInputUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun text  default config
    static #getDefaultConfig = () => {
        return {
            id: "text_id", name: "text", value: null, placeholder: null, 

            required: false, input_class_style: null, 
            
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        }
    }

}

export default new TextInputUIController().getUIComponentDefinition();