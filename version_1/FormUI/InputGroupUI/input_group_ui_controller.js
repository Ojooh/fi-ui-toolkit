

import BaseController       from "../../Base/base_controller";
import inputGroupUIConfig   from "./input_group_ui_config";

class InputGroupUIController extends BaseController { 
    constructor() { super("input_group_ui", inputGroupUIConfig); }

    // Method to get ui props
    getUIProps() { 
        return {
            input_group_class_style: { type: String, required: false, default: null },

            label_config: { type: Object, required: true },

            input_config: { type: Object, required: true },
        }; 
    }


    // Method to get computed data
    getUIComputedData() { 
        return {
            input_component: this.config.getInputComponent
        }; 
    }

}

export default new InputGroupUIController().getUIComponentDefinition();
