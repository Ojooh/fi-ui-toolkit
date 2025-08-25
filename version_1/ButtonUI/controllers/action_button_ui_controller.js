import BaseController       from "../../Base/base_controller";
import ActionBtnUIConfig    from "../configs/action_button_ui_config";

class ActionBtnUIController extends BaseController { 
    constructor() {
        super("action_button_ui", ActionBtnUIConfig);
    }

    // Method to get ui props
    getUIProps() { 
        return {
            btn_type: { type: String, default: "button", required: false },

            clicked: { type: Boolean, default: false, required: false },

            show_loader: { type: Boolean, default: false, required: false },
            
            disabled: { type: Boolean, default: true, required: false }, 

            class_style: { type: String, default: "", required: false },
            
            loader_text: { type: String, default: "Loading...", required: false },
            
            btn_text: { type: String, default: "", required: false },
            
            handleClickEvent: { type: Function, required: true },
        }
    }

}

export default new ActionBtnUIController().getUIComponentDefinition();