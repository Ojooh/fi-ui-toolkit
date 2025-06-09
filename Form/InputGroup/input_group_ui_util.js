import { markRaw } from "vue";

import TextAreaInputUI from "../Input/text_area_input_ui.vue";
import TextInputUI from "../Input/text_input_ui.vue";


class InputGroupUIUtil {
    constructor (name, vue_isnatnce) {
        this.name   = name
        this.vm     = vue_isnatnce
    }

    // Method to store input types map
    #inputTypesMap = () => {
        return {
            textarea: markRaw(TextAreaInputUI),

            text: markRaw(TextInputUI),
        };
    }

    // Method to get input component
    getInputComponent = (input_type) => { return this.#inputTypesMap()?.[input_type] || null; }

    // Method to return util methods in object
    getUtilMethods = () => {
        return {
            getInputComponent: this.getInputComponent
        }
    }

}

export default InputGroupUIUtil