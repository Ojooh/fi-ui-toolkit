import BaseEventHandler             from "../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../types/component_type";

class ModalUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on click event
    public async handleOnModalCloseClick (event: MouseEvent): Promise<void> {
        try {
            const { on_modal_close, layer }  = this.controller.props;

            const clicked_ref   = this.controller.state_refs.clicked;
            clicked_ref.value   = true;

            if (!on_modal_close || !Number.isInteger(layer)) { return; }

            const result = on_modal_close(event, layer);

            if (result instanceof Promise) { await result; }
        } 
        catch (error) {
            console.error(`[${this.controller.name}] handleOnClick error:`, error);
        } 
        finally {
            this.controller.state_refs.clicked.value = false;
        }
    }
}

export default ModalUIEventHandler;