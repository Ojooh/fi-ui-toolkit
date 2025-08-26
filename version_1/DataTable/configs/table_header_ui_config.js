import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";


class TableHeaderUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

    // Method to get select checkbox props
    getSelectAllCheckboxProps = (instance_varaibles) => {
        const { checkbox_id, onRecordRowsSelected, is_selected } = instance_varaibles;

        const id                        = `${checkbox_id}`;
        const name                      = id;
        const value                     = is_selected?.() || false;
        const is_checked                = is_selected?.() || false;
        const handleInputClickEvent     = onRecordRowsSelected ? onRecordRowsSelected : null;
        const checkbox_props            = { id, name, value, is_checked, handleInputClickEvent };

        return { config: checkbox_props }
    }

}

export default TableHeaderUIConfig;