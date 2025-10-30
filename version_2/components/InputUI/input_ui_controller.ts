
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import InputUIEventHandler          from "./input_ui_event_handler";
import TextInput                    from "./variants/text_input.vue";
import CheckboxInput                from "./variants/checkbox_input.vue";
import OtpInput                     from "./variants/otp_input.vue";
import SwitchInput                  from "./variants/switch_input.vue";
import TextareaInput                from "./variants/textarea_input.vue";
import SelectInput                  from "./variants/select_input.vue";
import NumberInput                  from "./variants/number_input.vue";
import FileInput                    from "./variants/file_input.vue";

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

    // Dynamically map input type to component
    public getInputComponent = (type?: string) => {
        switch (type) {
            case "text":
            case "password":
            case "email":
                return TextInput;
            case "checkbox":
                return CheckboxInput;
            case "otp":
                return OtpInput;
            case "switch":
                return SwitchInput;
            case "text_area":
            case "textarea":
                return TextareaInput;
            case "select":
                return SelectInput;
            case "number":
                return NumberInput;
            case "file":
                return FileInput;
            default:
                return TextInput;
        }
    };

}

export default InputUIController;