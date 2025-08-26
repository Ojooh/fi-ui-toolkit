


import BaseController            from "../Base/base_controller";
import ImageTextUIConfig         from "./image_text_ui_config";

class ImageTextUIController extends BaseController { 
    constructor() { super("image_text_ui", ImageTextUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            text: { type: String, required: false, default: null },
            
            text_class: { type: String, default: "text-black" },

            image_src: { type: String, required: false, default: null },

            img_alt: { type: String, required: false, default: null },

            img_class_style: { type: String, required: false, default: "" },

            wrapper_class_style: { type: String, required: false, default: "" },
        }
    }

}

export default new ImageTextUIController().getUIComponentDefinition();
