import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";
import { InputEventMethodOptions }  from "../../../types/input_ui_type";

class SortableHeaderCellUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on key up event
    public handleOnSort (event: MouseEvent, options?: InputEventMethodOptions) {
        const { on_sort }           = this.controller.props;
        const { sortable_value }    = options || {}

        if(!on_sort) { return; }

        on_sort(event, sortable_value);
    }


}

export default SortableHeaderCellUIEventHandler;