
import BaseController               from "../Base/base_controller";
import FooterCopyRightUIConfig      from "./footer_copy_right_ui_config";

class FooterCopyRightUIController extends BaseController { 
    constructor() { super("footer_copy_right_ui", FooterCopyRightUIConfig); }

    // Method to get ui props
    getUIProps() { 
        const current_year = new Date().getFullYear().toString();

        return {
            class_style_text: { type: String, default: null, required: false },

            year: { type: String, default: current_year, required: false },

            powered_by_text: { type: String, required: true },

            author_text: { type: String, required: true },
        }
    }

}

export default new FooterCopyRightUIController().getUIComponentDefinition();