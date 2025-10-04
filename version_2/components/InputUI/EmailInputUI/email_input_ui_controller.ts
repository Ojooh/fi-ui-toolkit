
import { ref }                      from "vue";
import BaseController               from "../../../base_classes/base_controller";
import EmailInputUIEventHandler     from "./email_input_ui_event_handler";

class EmailInputUIController extends BaseController {
    public event_handler: EmailInputUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("email_input_ui", props);
        this.event_handler = new EmailInputUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {
            input_value: ref(this.props.value ?? ""),
        } 
    }

}

export default EmailInputUIController;