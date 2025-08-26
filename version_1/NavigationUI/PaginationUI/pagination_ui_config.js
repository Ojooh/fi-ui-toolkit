
import BaseConfig           from "../../Base/base_config";
import PaginationUIUtil     from "./pagination_ui_util";


class PaginationUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new PaginationUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui state data
    getUIStateData() { 
        const selected_page = this.vue_instance?.proxy.$props?.current_page;

        return { selected_page }
    }
}

export default PaginationUIConfig;