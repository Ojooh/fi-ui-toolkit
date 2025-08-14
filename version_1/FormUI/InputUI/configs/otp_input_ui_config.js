import BaseConfig           from "../../../Base/base_config";
import InputUIUtil          from "../utils/input_ui_util";

class OTPInputUIConfig extends BaseConfig { 

    constructor() { super("otp_input_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        const input_ui_default_config = {
            id: "otp_id", otp_length: 6, value: Array(6).fill(""), placeholder: "",  

            required: false, input_class_style: null,  container_class_style: null,

            handleInputKeyDownEvent: null
        };

        return { config: { type: Object, default: input_ui_default_config, required: true } }; 
    }


    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            const first_input_id    = `${this.vue_instance.props?.config?.id}_0`;
            const first_input       = document.getElementById(first_input_id);

            first_input?.focus?.();
            this.logger.log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger.error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

}

export default OTPInputUIConfig;