import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";

class PasswordInputUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on key up event
    public handleOnKeyUp (event: KeyboardEvent) {
        const { on_key_up } = this.controller.props;

        if(!on_key_up) { return; }

        on_key_up(event);
    }

    // Method to handle on key down event
    public handleOnKeyDown (event: KeyboardEvent) {
        const { on_key_down } = this.controller.props;

        if(!on_key_down) { return; }

        on_key_down(event);
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

export default PasswordInputUIEventHandler;