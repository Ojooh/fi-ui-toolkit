
import BaseController       from "../../Base/base_controller";
import DataTableUIConfig  from "../configs/data_table_ui_config";

class DataTableUIController extends BaseController { 
    constructor() {
        super("data_table_ui_controller", new DataTableUIConfig());
    }

}

export default new DataTableUIController().getUIComponentDefinition();
