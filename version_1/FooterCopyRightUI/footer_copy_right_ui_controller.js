
import BaseController               from "../Base/base_controller";
import FooterCopyRightUIConfig      from "./footer_copy_right_ui_config";

class FooterCopyRightUIController extends BaseController { 
    constructor() {
        super("footer_copy_right_ui_controller", new FooterCopyRightUIConfig());
    }

}

export default new FooterCopyRightUIController().getUIComponentDefinition();