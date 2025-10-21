
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import ButtonUIEventHandler          from "./button_ui_event_handler";

class ButtonUIController extends BaseController {
    public event_handler: ButtonUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("button_ui", props);
        this.event_handler = new ButtonUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {
            clicked: ref(false),
            btn_content: ref(null)
        } 
    }

    // Method to get ui watchers
    protected getUIWatchers(): Record<string, (new_val: any, old_val: any) => void> { 
        return {
            clicked: (new_val, old_val) => {
                const { loader_content_text, show_loader, content_text } = this.props;

                const should_show_loading   = new_val === true && show_loader && loader_content_text;
                const new_btn_content       = should_show_loading ? loader_content_text :  null;
                
                this.state_refs.btn_content.value = new_btn_content;
                return;
            },
        }; 
    }
}

export default ButtonUIController;