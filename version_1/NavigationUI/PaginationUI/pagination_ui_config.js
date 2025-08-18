
import BaseConfig           from "../../Base/base_config";


class PaginationUIConfig extends BaseConfig { 
    constructor() { super("pagination_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        return {   
            id: { type: String, default: "Table", required: true },
            
            wrapper_class_style: { type: String, default: "", required: false },

            button_class_style: { type: String, default: "", required: false },

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

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            selected_page: this.vue_instance.data.current_page
        }; 
    }

    // Method to get ui watchers
    getUIWatchers() { 
        return {
            current_page: { 
                immediate: true, 
                deep: true, 
                handler: (new_value, old_value) => { this.selected_page = new_value } 
            },
        }; 
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;

        return { util }
    }
}

export default PaginationUIConfig;