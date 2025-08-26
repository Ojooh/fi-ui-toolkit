import BaseController       from "../../../Base/base_controller";
import BaseInputUIConfig    from "../configs/base_input_ui_config";

class TextAreaInputUIController extends BaseController { 
    constructor() { super("text_area_input_ui", BaseInputUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            id: { type: String, default: "text_area_id", required: true },
            
            name: { type: String, default: "text_area", required: true },
            
            modelValue: { type: String, default: "", required: false },

            rows: { type: Number, default: 4, required: false },

            placeholder: { type: String, default: "", required: false },
            
            read_only: { type: Boolean, default: false, required: false },

            required: { type: Boolean, default: false, required: false },
            
            input_class_style: { type: String, default: "", required: false }, 
            
            handleInputKeyUpEvent:  { type: Function | null, default: null, required: false },

            handleInputKeyDownEvent:  { type: Function | null, default: null, required: false },

            handleInputClickEvent:  { type: Function | null, default: null, required: false },
        }; 
    }

    // Method to get computed data
    getUIComputedData() { 
        return { value_proxy:  this.config.getComputedValueProxy }; 
    }


}

export default new TextAreaInputUIController().getUIComponentDefinition();