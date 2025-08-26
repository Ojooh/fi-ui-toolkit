import BaseController       from "../../Base/base_controller";
import BaseInputUIConfig   from "../configs/base_input_ui_config";

class OTPInputUIController extends BaseController { 
    constructor() { super("otp_input_ui", BaseInputUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            id: { type: String, default: "otp_id", required: true },
            
            name: { type: String, default: "otp", required: true },

            otp_length: { type: Number, default: 6, required: true },
            
            modelValue: { type: Array, default: Array(6).fill(""), required: false },

            placeholder: { type: String, default: "", required: false },
            
            read_only: { type: Boolean, default: false, required: false },

            required: { type: Boolean, default: false, required: false },
            
            input_class_style: { type: String, default: "", required: false }, 

            container_class_style: { type: String, default: "", required: false }, 
        }; 
    }

    // Method to get computed data
    getUIComputedData() { 
        return { value_proxy:  this.config.getComputedValueProxy }; 
    }

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            const first_input_id    = `${this.vue_instance.proxy.$props?.id}_0`;
            const first_input       = document.getElementById(first_input_id);

            first_input?.focus?.();
            this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

}

export default new OTPInputUIController().getUIComponentDefinition();