
import BaseController                   from "@ui/version_1/Base/base_controller.js";
import ActionBtnUIConfig                from "../configs/action_button_ui_config";
import HamburgerButtonUIConfig          from "../configs/hamburger_button_ui_config";

class BaseButtonUIController extends BaseController { 
    // Static method to map type → config class
    static getConfigClass(type) {
        const config_map = {
            action_btn_type: ActionBtnUIConfig,
            hamburger_btn_type: HamburgerButtonUIConfig,
        };
        return config_map[type] || null;
    }

    constructor(type, name = "base_button_ui_controller") {
        const ConfigClass = BaseButtonUIController.getConfigClass(type);

        if (!ConfigClass) { throw new Error(`[${name}] Unknown button type: ${type}`); }

        super(`${type}_${name}`, new ConfigClass());
    }

    handleOnMountedLogic() { return this.config?.handleOnMountedLogic?.(); }
}

export default new BaseButtonUIController;