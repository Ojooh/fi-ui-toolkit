
import BaseController               from "../../../base_classes/base_controller";

class TopBarUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("top_bar_ui", props);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {}
    }

}

export default TopBarUIController;