import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";

class StatusAlertUIEventHanlder extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on click event
    public handleOnClick (event: MouseEvent) {
        const { on_close } = this.controller.props;

        if(!on_close) { return; }

        on_close(event);
    }
}

export default StatusAlertUIEventHanlder;