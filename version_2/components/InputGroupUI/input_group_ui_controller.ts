
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import InputUI                      from "../InputUI/input_ui.vue";

class InputGroupUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("input_group_ui", props);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  { InputUI }; 
    }

}

export default InputGroupUIController;