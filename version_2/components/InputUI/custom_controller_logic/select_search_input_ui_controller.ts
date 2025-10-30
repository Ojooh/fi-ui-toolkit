
import { ref, reactive }                from "vue";
import BaseController                   from "../../../base_classes/base_controller";
import InputUIEventHandler              from "../input_ui_event_handler";
import SelectSearchInputUIEventhandler  from "../custom_event_handler_logic/select_search_input_ui_event_handler";


class SelectSearchInputUIController extends BaseController {
    public event_handler: SelectSearchInputUIEventhandler;
    public is_open: boolean;
    public is_loading_records: boolean;
    public search_selected_text: string;
    public record_options: any[];
    public cache: Map<string, any[]>;
    public current_page: number;
    public total_pages: number;
    public size: number;

    constructor(props: Record<string, any> = {}) {
        super("select_search_input_ui", props);

        this.event_handler          = new SelectSearchInputUIEventhandler(this);
        this.is_open                = false;
        this.is_loading_records     = false;
        this.search_selected_text   = "";
        this.record_options         = [];
        this.current_page           = 1;
        this.total_pages            = 0;
        this.size                   = 20;
        this.cache                  = new Map<string, any[]>();
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return { 
            is_open: ref(this.is_open), 

            is_loading_records: ref(this.is_loading_records), 

            search_selected_text: ref(this.search_selected_text), 
            
            record_options: ref(this.record_options),

            current_page: ref(this.current_page),

            total_pages: ref(this.total_pages),

            size: ref(this.size)


        } 
    }


}

export default SelectSearchInputUIController;