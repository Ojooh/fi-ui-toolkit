

import BaseController               from "../../Base/base_controller";
import FullScreenLoaderUIConfig     from "./full_screen_loader_ui_config";

class FullScreenLoaderUIController extends BaseController { 
    constructor() { super("full_screen_loader_ui", FullScreenLoaderUIConfig);}

    // Method to get ui props
    getUIProps() { 
        return {
            visible: { type: Boolean, default: false, required: false },

            loader_overlay_class_style: { type: String, default: "", required: false },

            loader_content_class_style: { type: String, default: "", required: false },

            loader_content_symbol_class_style: { type: String, default: "", required: false },

            loader_content_symbol_object: { type: Object, default: { type: "img", src: ""}, required: true },

            loader_text: { type: String, default: "", required: false },

            loader_content_text_class_style: { type: String, default: "", required: false },
        }; 
    }

}

export default new FullScreenLoaderUIController().getUIComponentDefinition();
