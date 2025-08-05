

import BaseInputUIController from "./base_input_ui_controller";

class TextAreaInputUIController extends BaseInputUIController {
    constructor () {
        const name              = "text_area_input_ui";
        const config_default    = TextAreaInputUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun text area default config
    static #getDefaultConfig = () => {
        return {
            id: "textarea_id", name: "textarea", rows: 4, value: null, placeholder: null, 

            required: false, input_class_style: null, 
            
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        }
    }

}

export default new TextAreaInputUIController().getUIComponentDefinition();