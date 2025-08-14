
import BaseController                   from "../../Base/base_controller";
import SortableHeaderCellUIConfig       from "../configs/sortable_header_cell_ui_config";
import TableHeaderUIConfig              from "../configs/table_header_ui_config";
import TableBodyUIConfig                from "../configs/table_body_ui_config";


class BaseDataTableUIController extends BaseController { 
    // Static method to map type → config class
    static getConfigClass(type) {
        const config_map = {
            sortable_header_cell_config: SortableHeaderCellUIConfig,

            table_header_config: TableHeaderUIConfig,

            table_body_config: TableBodyUIConfig,
        };
        return config_map[type] || null;
    }

    constructor(type, name = "base_data_table_ui_controller") {
        const ConfigClass = BaseDataTableUIController.getConfigClass(type);

        if (!ConfigClass) { throw new Error(`[${name}] Unknown data table type: ${type}`); }

        super(`${type}_${name}`, new ConfigClass());
    }

    handleOnMountedLogic() { return this.config?.handleOnMountedLogic?.(); }
}

export default BaseDataTableUIController;