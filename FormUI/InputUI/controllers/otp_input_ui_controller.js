

import { ref, getCurrentInstance } from "vue";

import BaseInputUIController from "./base_input_ui_controller";

class OTPInputUIController extends BaseInputUIController {
    constructor () {
        const name              = "otp_input_ui";
        const config_default    = OTPInputUIController.#getDefaultConfig();

        super(name, config_default);
    }

    // method to retrun email  default config
    static #getDefaultConfig = () => {
        return {
            id: "otp_id", otp_length: 6, value: Array(6).fill(""), placeholder: "",  required: false, 
            input_class_style: null,  container_class_style: null,
            handleInputKeyDownEvent: null
        }
    }

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            const first_input_id    = `${this.vm.props?.config?.id}_0`;
            const first_input       = document.getElementById(first_input_id);

            first_input?.focus?.();
            this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

}

export default new OTPInputUIController().getUIComponentDefinition();