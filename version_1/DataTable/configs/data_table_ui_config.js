
import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";


class DataTableUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

    // Method to get section id
    getSectionId = (instance_variables) => { return `${instance_variables?.id}DataTable`}

}

export default DataTableUIConfig;