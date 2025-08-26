
import BaseController   from "../../Base/base_controller";
import SectionUIConfig  from "./section_ui_config";

class SectionUIController extends BaseController { 
    constructor() { super("section_ui", SectionUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            wrapper_class_style: { type: String, default: "", required: false },

            section_id: { type: String, default: "", required: false },

            components: { type: Array, default: [], required: true },
        }
    }

}

export default new SectionUIController().getUIComponentDefinition();
