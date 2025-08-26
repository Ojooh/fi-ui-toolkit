import BaseController       from "../../../Base/base_controller";
import BaseInputUIConfig    from "../configs/base_input_ui_config";

class InlineSearchBoxInputUIController extends BaseController { 
    constructor() { super("inline_search_box_input_ui", BaseInputUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            id: { type: String, default: "inline_search_id", required: true },
            
            name: { type: String, default: "inline_search", required: false },
            
           value_obj: { type: Object, default: { input_value: ""}, required: false },

            placeholder: { type: String, default: "", required: false },
            
            read_only: { type: Boolean, default: false, required: false },

            required: { type: Boolean, default: false, required: false },
            
            input_class_style: { type: String, default: "", required: false },
            
            wrapper_class_style: { type: String, default: "", required: false },

            search_btn_class_style: { type: String, default: "", required: false },
            
            handleInputKeyUpEvent:  { type: Function, default: null, required: false },

            handleInputKeyDownEvent:  { type: Function, default: null, required: false },

            handleInputClickEvent:  { type: Function, default: null, required: false },
        }; 
    }

    // Method to get computed data
    getUIComputedData() { 
        return { 
            value_proxy:  this.config.getComputedValueProxy,

            search_btn_icon: this.config.getSearchBtnSvgIcon
        }; 
    }


}

export default new InlineSearchBoxInputUIController().getUIComponentDefinition();