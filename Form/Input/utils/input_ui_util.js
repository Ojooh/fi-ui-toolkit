import LoggerUtil from "../../../Logger/logger_util";

class InputUIUtil {
    constructor (name, vue_isnatnce) {
        this.name           = "input_ui_util"
        this.vm             = vue_isnatnce
        this.logger         = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Method to return util methods in object
    getUtilMethods = () => {
        return {
            
        }
    }

}

export default InputUIUtil