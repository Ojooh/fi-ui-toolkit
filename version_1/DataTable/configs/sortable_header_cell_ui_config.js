import BaseConfig           from "../../../Base/base_config";
import DataTableUIUtil      from "../utils/data_table_ui_util";
import SVGIcons             from "../../Resources/svg_icon_resource";

class SortableHeaderCellUIConfig extends BaseConfig { 
    constructor() { super("sortable_header_cell_ui_config"); }

    // Method to get caret up svg icon
    getCaretUpIcon = (instance_variables) => { return SVGIcons.trinagular_caret_up_svg_icon }

    // Method to get caret down svg icon
    getCaretDownIcon = (instance_variables) => { return SVGIcons.trinagular_caret_down_svg_icon }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DataTableUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        return {   
            wrapper_class_style: { type: String, default: "", required: false },

            title_class_style: { type: String, default: "", required: false },

            active_icon_class_style: { type: String, default: "", required: false },

            inactive_icon_class_style: { type: String, default: "", required: false },

            id: { type: String, required: true },

            title_text: { type: String, required: true },

            current_order_direction_value: { type: String, default: null }, // 'asc' | 'desc' | null

            toggleSort: { type: Function, required: true }
        }
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return {
            caret_up_svg_icon: this.getCaretUpIcon,

            caret_down_svg_icon: this.getCaretDownIcon,
        }; 
    }

    // Method to get ui state data
    getUIStateData() { 
        const util  = this.util;
        return { util }; 
    }

}

export default SortableHeaderCellUIConfig;