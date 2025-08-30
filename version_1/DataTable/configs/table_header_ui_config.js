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
        const is_checked                = is_selected?.() || false;
        const value_obj                 = { input_value:  is_checked };
        const handleInputClickEvent     = onRecordRowsSelected ? onRecordRowsSelected : null;
        const checkbox_props            = { id, name, value_obj, is_checked, handleInputClickEvent };

        return checkbox_props
    }

}

export default TableHeaderUIConfig;