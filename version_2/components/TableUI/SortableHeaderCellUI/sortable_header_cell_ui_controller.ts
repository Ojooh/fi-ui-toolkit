
import { ref }                              from "vue";
import BaseController                       from "../../../base_classes/base_controller";
import SortableHeaderCellUIEventHandler     from "./sortable_header_cell_ui_event_handler";

class SortableHeaderCellUIController extends BaseController {
    public event_handler: SortableHeaderCellUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("sortable_header_cell_ui", props);
        this.event_handler = new SortableHeaderCellUIEventHandler(this);
    }
}

export default SortableHeaderCellUIController;