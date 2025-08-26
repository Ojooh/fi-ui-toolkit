import BaseController       from "../../Base/base_controller";
import BaseInputUIConfig    from "../configs/base_input_ui_config";

class SwitchInputUIController extends BaseController { 
    constructor() { super("switch_input_ui", BaseInputUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            id: { type: String, default: "switch_id", required: true },
            
            name: { type: String, default: "switch", required: true },
            
            modelValue: { type: String, default: "", required: false },

            placeholder: { type: String, default: "", required: false },
            
            read_only: { type: Boolean, default: false, required: false },

            required: { type: Boolean, default: false, required: false },

            is_loading: { type: Boolean, default: false, required: false },
            
            wrapper_class_style: { type: String, default: "", required: false }, 

            loader_class_style: { type: String, default: "", required: false }, 

            btn_class_style: { type: String, default: "", required: false }, 

            label_text_class_style: { type: String, default: "", required: false }, 

            knob_class_style: { type: String, default: "", required: false }, 

            active_class_style: { type: String, default: "bg-blue-300", required: false }, 

            inactive_class_style: { type: String, default: "bg-gray-900", required: false }, 

            label_text: { type: String, default: "", required: false }, 

            loader_content: { type: String | null, default: null, required: false }, 
            
            handleSwitchToggle:  { type: Function | null, default: null, required: false },
        }; 
    }

    // Method to get computed data
    getUIComputedData() { 
        return { value_proxy:  this.config.getComputedValueProxy }; 
    }


}

export default new SwitchInputUIController().getUIComponentDefinition();