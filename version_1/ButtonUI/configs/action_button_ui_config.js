
import BaseConfig            from "../../Base/base_config";
import ButtonUIUtil          from "../utils/button_ui_util";

class ActionBtnUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new ButtonUIUtil(vue_instance, this.content_manager);
    }  

}

export default ActionBtnUIConfig;