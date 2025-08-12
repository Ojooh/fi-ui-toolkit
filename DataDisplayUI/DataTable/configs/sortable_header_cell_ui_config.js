
import LoggerUtil from "../../../Logger/logger_util";
import DataTableUIUtil from "../utils/data_table_ui_util";
import SVGIcons from "../../../Resources/svg_icon_resource";

class SortableHeaderCellUIConfig {
    constructor() {
        this.name               = "table_header_ui_config"
        this.vue_instance       = null;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance       = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(this.vue_instance, this.content_manager);
    }

    // Method to get caret up svg icon
    getCaretUpIcon = (instance_variables) => { return SVGIcons.trinagular_caret_up_svg_icon }

    // Method to get caret down svg icon
    getCaretDownIcon = (instance_variables) => { return SVGIcons.trinagular_caret_down_svg_icon }


    // Method to get state variables
    getStateVariables = () => {
        const util = this.util;

        return { util }
    }

}

export default SortableHeaderCellUIConfig;