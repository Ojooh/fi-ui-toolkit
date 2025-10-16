
import { ref }                              from "vue";
import BaseController                       from "../../../base_classes/base_controller";
import SortableHeaderCellUI                 from "../SortableHeaderCellUI/sortable_header_cell_ui.vue";

class TableHeaderUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("table_header_ui", props);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  { SortableHeaderCellUI }; 
    }
}

export default TableHeaderUIController;