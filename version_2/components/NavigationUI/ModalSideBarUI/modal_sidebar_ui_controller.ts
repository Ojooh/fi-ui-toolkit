
import { ref }                      from "vue";
import BaseController               from "../../../base_classes/base_controller";
import ModalSidebarUIEventHandler   from "./modal_sidebar_ui_event_handler";

class ModalSidebarUIController extends BaseController {
    public event_handler: ModalSidebarUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("modal_sidebar_ui", props);
        this.event_handler = new ModalSidebarUIEventHandler(this);
    }
}

export default ModalSidebarUIController;