
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import CheckBoxInputUI              from "../InputUI/CheckBoxInputUI/check_box_input_ui.vue";
import EmailInputUI                 from "../InputUI/EmailInputUI/email_input_ui.vue";
import PasswordInputUI              from "../InputUI/PasswordInputUI/password_input_ui.vue";
import TextInputUI                  from "../InputUI/TextInputUI/text_input_ui.vue";

class InputGroupUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("input_group_ui", props);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  {
            CheckBoxInputUI,
            EmailInputUI,
            PasswordInputUI,
            TextInputUI
        }; 
    }

}

export default InputGroupUIController;