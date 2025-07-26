import { markRaw } from "vue";

import LoggerUtil from "../../Logger/logger_util";

import TextAreaInputUI from "../Input/text_area_input_ui.vue";
import TextInputUI from "../Input/text_input_ui.vue";
import EmailInputUI from "../Input/email_input_ui.vue";
import PasswordInputUI from "../Input/password_input_ui.vue";
import OTPInputUI from "../Input/otp_input_ui.vue";


class InputGroupUIUtil {
    constructor (name, vue_isnatnce) {
        this.name       = "input_group_ui_util"
        this.vm         = vue_isnatnce
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Method to store input types map
    #inputTypesMap = () => {
        return {
            textarea: markRaw(TextAreaInputUI),

            text: markRaw(TextInputUI),

            email: markRaw(EmailInputUI),

            password: markRaw(PasswordInputUI),

            otp: markRaw(OTPInputUI)
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