
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import ButtonUI                     from "../ButtonUI/button_ui.vue";
import InputUI                      from "../InputUI/input_ui.vue";

class SearchFieldUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("search_field_ui", props);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  { InputUI, ButtonUI }; 
    }

}

export default SearchFieldUIController;