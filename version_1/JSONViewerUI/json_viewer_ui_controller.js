
import BaseController           from "../../Base/base_controller";
import JSONViewerUIConfig       from "./json_viewer_ui_config";

class JSONViewerUIController extends BaseController { 
    constructor() {
        super("json_viewer_ui_controller", new JSONViewerUIConfig());
    }

}

export default new JSONViewerUIController().getUIComponentDefinition();
