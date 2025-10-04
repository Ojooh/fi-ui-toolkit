import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";

class CheckBoxInputUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on click event
    public handleOnClick (event: MouseEvent) {
        const { on_click } = this.controller.props;

        if(!on_click) { return; }

        on_click(event);
    }

    // Method to handle on change event
    public handleOnChange (event: Event | InputEvent) {
        const { on_change } = this.controller.props;

        if(!on_change) { return; }

        const new_value = this.controller.state_refs.input_value;

        on_change(event, new_value);
    }
}

export default CheckBoxInputUIEventHandler;