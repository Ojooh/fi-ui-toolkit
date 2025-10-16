
import { ref }                              from "vue";
import BaseController                       from "../../../base_classes/base_controller";

class TableBodyUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("table_body_ui", props);
    }

    public computeComponentRecordProps (record: Record<string, any>): Record<string, any>  {
        const { component_props } = this.props;

        if(!component_props || typeof component_props !== "function") { return {} }

        return component_props(record)
    }
}

export default TableBodyUIController;