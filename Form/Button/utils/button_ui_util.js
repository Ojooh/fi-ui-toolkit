import LoggerUtil from "../../../Logger/logger_util";

class ButtonUIUtil {
    constructor (name, vue_isnatnce) {
        this.name       = "button_ui_util"
        this.vm         = vue_isnatnce;
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() })
    }

    // Method to return util methods in object
    getActionBtnUtilMethods = () => {
        return {
            
        }
    }

}

export default ButtonUIUtil