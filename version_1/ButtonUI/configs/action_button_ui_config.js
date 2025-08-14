
import BaseConfig            from "../../Base/base_config";
import ButtonUIUtil          from "../utils/button_ui_util";

class ActionBtnUIConfig extends BaseConfig { 
    constructor() { super("hamburger_button_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new ButtonUIUtil(vue_instance, this.content_manager);
    }

     // Method to get ui props
    getUIProps() { 
        const btn_default_config = {
            btn_type: "button",  clicked: false, show_loader: false, disabled: true, 

            class_style: "",loader_text: null, btn_text: null, handleClickEvent: null,
        };

        return { config: { type: Object, default: btn_default_config, required: true }}; 
    }


    // Method to get state variables
    getStateVariables = () => {
        const util  = this.util;

        return { util };
    }

    

}

export default ActionBtnUIConfig;