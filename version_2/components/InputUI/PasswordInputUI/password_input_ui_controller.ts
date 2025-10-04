
import { ref }                      from "vue";
import BaseController               from "../../../base_classes/base_controller";
import PasswordInputUIEventHandler  from "./password_input_ui_event_handler";

class PasswordInputUIController extends BaseController {
    public event_handler: PasswordInputUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("password_input_ui", props);
        this.event_handler = new PasswordInputUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {
            input_value: ref(this.props.value ?? ""),
        } 
    }

}

export default PasswordInputUIController;