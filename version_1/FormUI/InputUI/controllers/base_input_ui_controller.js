
import BaseController                   from "@ui/version_1/Base/base_controller.js";
import EmailInputUIConfig               from "../configs/email_input_ui_config";
import InlineSearchBoxInputUIConfig     from "../configs/inline_search_box_input_ui_config";
import OTPInputUIConfig                 from "../configs/otp_input_ui_config";
import PasswordInputUIConfig            from "../configs/password_input_ui_config";
import TextAreaInputUIConfig            from "../configs/text_area_input_ui_config";
import TextInputUIConfig                from "../configs/text_input_ui_config";

class BaseInputUIController extends BaseController { 
    // Static method to map type → config class
    static getConfigClass(type) {
        const config_map = {
            email_input_type: EmailInputUIConfig,
            inline_search_box_input_type: InlineSearchBoxInputUIConfig,
            otp_input_type: OTPInputUIConfig,
            password_input_type: PasswordInputUIConfig,
            text_area_input_type: TextAreaInputUIConfig,
            text_input_type: TextInputUIConfig,
            
        };
        return config_map[type] || null;
    }

    constructor(type, name = "base_input_ui_controller") {
        const ConfigClass = BaseInputUIController.getConfigClass(type);

        if (!ConfigClass) { throw new Error(`[${name}] Unknown input type: ${type}`); }

        super(`${type}_${name}`, new ConfigClass());
    }

    handleOnMountedLogic() { return this.config?.handleOnMountedLogic?.(); }
}

export default new BaseInputUIController;