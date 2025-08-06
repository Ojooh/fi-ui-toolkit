

import BaseInputUIController from "./base_input_ui_controller";

class SearchInputUIController extends BaseInputUIController {
    constructor () {
        const name              = "search_input_ui";
        const config_default    = SearchInputUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun text  default config
    static #getDefaultConfig = () => {
        return {
            id: "search_id", name: "text", value: null, placeholder: null, 

            required: false, input_class_style: null,  wrapper_class_style: "", search_btn_class_style: "",
            
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        }
    }

    // Computed variables
    getUIComputedData = () => { 
        return {
            search_btn_icon: this.util.getSearchBtnSvgIcon,
        }; 
    };

}

export default new SearchInputUIController().getUIComponentDefinition();