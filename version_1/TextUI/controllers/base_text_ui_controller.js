

import BaseController           from "../../Base/base_controller";
import BaseTextUIConfig         from "../configs/base_text_ui_config";

class BaseTextUIController extends BaseController { 
    constructor() { super("base_text_ui", BaseTextUIConfig); }

    getUIProps() { 
        return { 
            text_class_style: { type: String, default: "", required: false },

            text_content: { type: String, default: "", required: false },
        }; 
    }
}

export default new BaseTextUIController().getUIComponentDefinition();
