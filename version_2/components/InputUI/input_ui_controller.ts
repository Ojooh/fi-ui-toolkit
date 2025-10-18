
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import InputUIEventHandler          from "./input_ui_event_handler";

class InputUIController extends BaseController {
    public event_handler: InputUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("input_ui", props);
        this.event_handler = new InputUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        const { value, is_checked } = this.props;
        const existing_value        = value ?? is_checked ?? "";

        return {
            input_value: ref(existing_value),

            is_loading: ref(false),
        } 
    }

}

export default InputUIController;