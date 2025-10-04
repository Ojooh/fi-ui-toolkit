import BaseEventHandler             from "../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../types/component_type";

class ButtonUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on click event
    public async handleOnClick(event: MouseEvent): Promise<void> {
        try {
            const { on_click }  = this.controller.props;
            const clicked_ref   = this.controller.state_refs.clicked;
            clicked_ref.value   = true;

            if (!on_click) { return; }

            const result = on_click(event);

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

export default ButtonUIEventHandler;