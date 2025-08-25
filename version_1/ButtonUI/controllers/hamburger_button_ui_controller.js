import BaseController               from "../../Base/base_controller";
import HamburgerButtonUIConfig      from "../configs/hamburger_button_ui_config";

class HamburgerButtonUIController extends BaseController { 
    constructor() {
        super("hamburger_button_ui", HamburgerButtonUIConfig);
    }

    // Method to get ui props
    getUIProps() { 
        return {
            class_style: { type: String, default: "", required: false },

            button_class_style: { type: String, default: "", required: false },

            logo_class_style: { type: String, default: "", required: false },
            
            btn_icon: { type: String | null, default: null, required: false },

            logo_link: { type: String | null, default: null, required: false },
            
            logo_content: { type: String, default: "", required: false },
            
            handleOnClickEvent: { type: Function, required: true },
        }
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return { hamburger_svg_icon: this.config.getHamburgerSVGIcon }; 
    }

}

export default new HamburgerButtonUIController().getUIComponentDefinition();