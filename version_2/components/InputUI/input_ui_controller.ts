
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
import SelectSearchInput            from "./variants/select_search_input.vue";

class InputUIController extends BaseController {
    public event_handler: InputUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("input_ui", props);
        this.event_handler = new InputUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        const { value, is_checked, id } = this.props;
        let existing_value: string | number | boolean | string[];

        // Normalize the value to ensure consistent type handling
        if (Array.isArray(value)) { 
            existing_value = [...value]; 
        } 

        else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") { 
            existing_value = value; 
        } 
        else { existing_value = ""; }

        return {
            existing_value,

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
            case "select_search":
                return SelectSearchInput;
            default:
                return TextInput;
        }
    };

    protected async handleOnMountedLogic(): Promise<void> {
        const { type, id } = this.props;

        if( type === "otp" ) {
            const input_key = `${id}_0`;
            document.getElementById(input_key)?.focus();
        }
        
    }


}

export default InputUIController;