
import { ref }                              from "vue";
import BaseController                       from "../../../base_classes/base_controller";
import TableHeaderUI                        from "../TableHeaderUI/table_header_ui.vue";
import TableBodyUI                          from "../TableBodyUI/table_body_ui.vue";
import ListLoaderUI                         from "../../../components/LoaderUI/ListLoaderUI/list_loader_ui.vue";

class DataTableUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("data_table_ui", props);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  { TableHeaderUI, TableBodyUI, ListLoaderUI }; 
    }
}

export default DataTableUIController;