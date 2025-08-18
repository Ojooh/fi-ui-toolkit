

import BaseController from "../../Base/base_controller";
import PaginationUIConfig from "./pagination_ui_config";

class PaginationUIController extends BaseController { 
    constructor() {
        super("pagination_ui_controller", new PaginationUIConfig());
    }
}

export default new PaginationUIController().getUIComponentDefinition();

