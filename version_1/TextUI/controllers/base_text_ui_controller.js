
import BaseController               from "@ui/version_1/Base/base_controller.js";
import BaseTextUIConfig             from "../configs/base_text_ui_config";

class BaseTextUIController extends BaseController { 
    // Static method to map type → config class
    static getConfigClass(type) {
        const config_map = {
            base_text_type: BaseTextUIConfig
            
        };
        return config_map[type] || null;
    }

    constructor(type, name = "base_text_ui_controller") {
        const ConfigClass = BaseTextUIController.getConfigClass(type);

        if (!ConfigClass) { throw new Error(`[${name}] Unknown base text type: ${type}`); }

        super(`${type}_${name}`, new ConfigClass());
    }

    handleOnMountedLogic() { return this.config?.handleOnMountedLogic?.(); }
}

export default BaseTextUIController;