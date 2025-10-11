
import BaseController           from "../../../base_classes/base_controller";
import NavLinkUI                from "../NavLinkUI/nav_link_ui.vue";

class BreadCrumbUIController extends BaseController {

    constructor(props: Record<string, any> = {}) {
        super("bread_crumb_ui", props);
    }

    // Method to get ui components
    protected getUIComponents(): Record<string, any> { 
        return  { NavLinkUI }; 
    }

}

export default BreadCrumbUIController;