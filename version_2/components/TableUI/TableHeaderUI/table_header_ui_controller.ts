
import { ref }                              from "vue";
import BaseController                       from "../../../base_classes/base_controller";
import SortableHeaderCellUI                 from "../SortableHeaderCellUI/sortable_header_cell_ui.vue";
import TableHeaderUIEventHandler            from "./table_header_ui_event_handler";

class TableHeaderUIController extends BaseController {
    public event_handler: TableHeaderUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("table_header_ui", props);

        this.event_handler = new TableHeaderUIEventHandler(this);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  { SortableHeaderCellUI }; 
    }
}

export default TableHeaderUIController;