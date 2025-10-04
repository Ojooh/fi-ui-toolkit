
import { ref }                      from "vue";
import BaseController               from "../../../base_classes/base_controller";
import CheckBoxInputUIEventHandler  from "./check_box_input_ui_event_handler";

class CheckBoxUIController extends BaseController {
    public event_handler: CheckBoxInputUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("check_box_input_ui", props);
        this.event_handler = new CheckBoxInputUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {
            input_value: ref(this.props.is_checked ? true: false),
        } 
    }

}

export default CheckBoxUIController;