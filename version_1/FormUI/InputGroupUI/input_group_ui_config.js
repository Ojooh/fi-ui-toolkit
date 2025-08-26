
import { markRaw  }                     from "vue";
import BaseConfig                       from "../../Base/base_config";
import InputGroupUIUtil                 from "./input_group_ui_util";
import EmailInputUI                     from "../InputUI/email_input_ui.vue";
import InlineSearchBoxInputUI           from "../InputUI/inline_search_box_input_ui.vue";
import OTPInputUI                       from "../InputUI/otp_input_ui.vue";
import PasswordInputUI                  from "../InputUI/password_input_ui.vue";
import TextAreaInputUI                  from "../InputUI/text_area_input_ui.vue";
import TextInputUI                      from "../InputUI/text_input_ui.vue"

class inputGroupUIConfig extends BaseConfig { 
    constructor() { super("input_group_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputGroupUIUtil(vue_instance, this.content_manager);
    }
    
    // Method to get input component
    getInputComponent = (instance_variables) => {
        const input_type = instance_variables.proxy.$props?.input_config?.input_type;

        return this.#inputTypesMap()?.[input_type] || null;
    }

    // Method to store input types map
    #inputTypesMap = () => {
        return {
            textarea: markRaw(TextAreaInputUI),

            text: markRaw(TextInputUI),

            email: markRaw(EmailInputUI),

            password: markRaw(PasswordInputUI),

            otp: markRaw(OTPInputUI),

            inline_search: markRaw(InlineSearchBoxInputUI),
        };
    }
}

export default inputGroupUIConfig;