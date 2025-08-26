
import BaseController           from "../../Base/base_controller";
import JSONViewerUIConfig       from "./json_viewer_ui_config";

class JSONViewerUIController extends BaseController { 
    constructor() { super("json_viewer_ui", JSONViewerUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            json_data: { type: [Object, Array], default: {}, required: true },
        }
    }

}

export default new JSONViewerUIController().getUIComponentDefinition();
