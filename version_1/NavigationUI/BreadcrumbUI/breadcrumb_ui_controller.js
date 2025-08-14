
import BaseController from "../../Base/base_controller";
import BreadcrumbUIConfig from "./breadcrumn_ui_config";

class BreadcrumbUIController extends BaseController { 
    constructor() {
        super("breadcrumb_ui_controller", new BreadcrumbUIConfig());
    }
}

export default new BreadcrumbUIController().getUIComponentDefinition();
