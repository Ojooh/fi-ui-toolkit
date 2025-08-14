


import BaseController               from "../Base/base_controller";
import ImageTextUIConfig         from "./image_text_ui_config";

class ImageTextUIController extends BaseController { 
    constructor() {
        super("image_text_ui_controller", new ImageTextUIConfig());
    }

}

export default new ImageTextUIController().getUIComponentDefinition();
