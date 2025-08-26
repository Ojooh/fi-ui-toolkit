
import BaseController       from "../../Base/base_controller";
import XBarLoaderUIConfig   from "./x_bar_loader_ui_config";

class XBarLoaderUIController extends BaseController { 
    constructor() { super("x_bar_loader_ui", XBarLoaderUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            number_of_bars: { type: Number, default: 10, required: false }, 
        }; 
    }
}

export default new XBarLoaderUIController().getUIComponentDefinition();