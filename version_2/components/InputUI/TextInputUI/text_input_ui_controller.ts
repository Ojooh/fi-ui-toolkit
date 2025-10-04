
import { ref }                      from "vue";
import BaseController               from "../../../base_classes/base_controller";
import TextInputUIEventHandler      from "./text_input_ui_event_handler";

class TextInputUIController extends BaseController {
    public event_handler: TextInputUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("text_input_ui", props);
        this.event_handler = new TextInputUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {
            input_value: ref(this.props.value ?? ""),
        } 
    }

}

export default TextInputUIController;