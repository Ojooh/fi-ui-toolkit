
import { ref }                  from "vue";
import BaseController           from "../../../base_classes/base_controller";
import PaginationUIEventHandler from "./pagination_ui_event_handler";

class PaginationUIController extends BaseController {
    public event_handler: PaginationUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("pagination_ui", props);

        this.event_handler = new PaginationUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        const { current_page, prev_btn_content, next_btn_content} = this.props;
        const selected_page_value  = current_page ?? 1;

        return {
            next_btn_clicked: ref(false), 
            prev_btn_clicked: ref(false),
            next_btn_content: ref(next_btn_content), 
            prev_btn_content: ref(prev_btn_content),
            selected_page: ref(selected_page_value),
        } 
    }

    // Method to get ui watchers
    protected getUIWatchers(): Record<string, (new_val: any, old_val: any) => void> { 
        return {
            prev_btn_clicked: (new_val, old_val) => {
                const { loader_content_text, show_loader, prev_btn_content } = this.props;

                const should_show_loading   = new_val === true && show_loader && loader_content_text;
                const new_btn_content       = should_show_loading ? loader_content_text:  prev_btn_content;
                
                this.state_refs.prev_btn_content.value = new_btn_content;
                return;
            },
            next_btn_clicked: (new_val, old_val) => {
                const { loader_content_text, show_loader, next_btn_content } = this.props;

                const should_show_loading   = new_val === true && show_loader && loader_content_text;
                const new_btn_content       = should_show_loading ? loader_content_text:  next_btn_content;
                
                this.state_refs.next_btn_content.value = new_btn_content;
                return;
            }
        }; 
    }

}

export default PaginationUIController;