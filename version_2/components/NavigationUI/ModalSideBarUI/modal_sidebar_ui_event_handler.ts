import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";

class ModalSidebarUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on click event
    public async handleOnClick(event: MouseEvent): Promise<void> {
        const { on_click }  = this.controller.props;

        if (!on_click) { return; }

        const result = on_click(event);

        if (result instanceof Promise) { await result; }
    }
}

export default ModalSidebarUIEventHandler;