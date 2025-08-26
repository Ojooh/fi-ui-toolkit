

import BaseController       from "../../Base/base_controller";
import PaginationUIConfig   from "./pagination_ui_config";

class PaginationUIController extends BaseController { 
    constructor() { super("pagination_ui", PaginationUIConfig); }


    // Method to get ui props
    getUIProps() { 
        return {               
            wrapper_class_style: { type: String, default: "", required: false },

            prev_button_class_style: { type: String, default: "", required: false },

            next_button_class_style: { type: String, default: "", required: false },

            disabled_class_style: { type: String, default: "", required: false }, 

            select_class_style: { type: String, default: "", required: false },

            prev_btn_content: { type: String, default: "Prev", required: false }, 

            next_btn_content: { type: String, default: "Next", required: false },

            renderPageContent: { type: Function, default: (page) => `Page ${page}`, required: false },

            total_pages: { type: Number, required: true },

            current_page: { type: Number, required: true },

            handleOnPrevBtnClicked: { type: Function, default: () => {}, required: false },

            handleOnNextBtnClicked: { type: Function, default: () => {}, required: false },

            handleOnNewPageSelected: { type: Function, default: () => {}, required: false },
        }
    }

    // Method to get ui watchers
    getUIWatchers() { 
        return {
            current_page: { 
                immediate: true, 
                deep: true, 
                handler: (new_value, old_value) => { 
                    let selected_page = this.vue_instance.proxy.$data;
                    selected_page = new_value;
                } 
            },
        }; 
    }
}

export default new PaginationUIController().getUIComponentDefinition();

