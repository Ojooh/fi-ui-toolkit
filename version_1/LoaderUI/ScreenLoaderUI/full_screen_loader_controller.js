

import BaseController from "../../Base/base_controller";
import FullScreenLoaderUIConfig from "./full_screen_loader_config";

class FullScreenLoaderController extends BaseController { 
    constructor() {
        super("full_screen_loader_controller", new FullScreenLoaderUIConfig());
    }

}

export default new FullScreenLoaderController().getUIComponentDefinition();
