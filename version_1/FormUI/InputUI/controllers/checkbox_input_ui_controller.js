import BaseController       from "../../../Base/base_controller";
import CheckboxInputUIConfig  from "../configs/base_input_ui_config";

class CheckboxInputUIController extends BaseController { 
    constructor() { super("checkbox_input_ui", CheckboxInputUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            id: { type: String, default: "checkbox_id", required: true },
            
            name: { type: String, default: "checkbox", required: false },
            
           value_obj: { type: Object, default: { input_value: ""}, required: false },
            
            is_checked: { type: Boolean, default: false, required: true },

            required: { type: Boolean, default: false, required: false },
            
            input_class_style: { type: String, default: "", required: false }, 
            
            handleInputClickEvent:  { type: Function, default: null, required: false },
        }; 
    }

   // Method to get computed data
    getUIComputedData() { 
        return { value_proxy:  this.config.getComputedValueProxy() }; 
    }

}

export default new CheckboxInputUIController().getUIComponentDefinition();