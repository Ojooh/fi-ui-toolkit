import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";
import { InputEventMethodOptions }  from "../../../types/input_ui_type";

class TableHeaderUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on change event
    public handleOnChange (event: Event | InputEvent, options?: InputEventMethodOptions) {
        const { on_toggle_all } = this.controller.props;

        const target        = event.target as HTMLInputElement;
        const is_checked    = target?.checked;

        if(!on_toggle_all) { return; }

        on_toggle_all(event, is_checked);
    }

}

export default TableHeaderUIEventHandler;