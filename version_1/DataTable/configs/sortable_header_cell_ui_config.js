import BaseConfig           from "../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import SVGIcons             from "../../Resources/svg_icon_resource";

class SortableHeaderCellUIConfig extends BaseConfig { 
   constructor(name) { super(name); }

    // Method to get caret up svg icon
    getCaretUpIcon = (instance_variables) => { return SVGIcons.trinagular_caret_up_svg_icon }

    // Method to get caret down svg icon
    getCaretDownIcon = (instance_variables) => { return SVGIcons.trinagular_caret_down_svg_icon }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

}

export default SortableHeaderCellUIConfig;