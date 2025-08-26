
import BaseController               from "../../Base/base_controller";
import SortableHeaderCellUIConfig   from "../configs/sortable_header_cell_ui_config";

class SortableHeaderCellUIController extends BaseController { 
    constructor() {
        super("sortable_header_cell_ui", SortableHeaderCellUIConfig);
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
            caret_up_svg_icon: this.config.getCaretUpIcon,

            caret_down_svg_icon: this.config.getCaretDownIcon,
        }; 
    }

}

export default new SortableHeaderCellUIController().getUIComponentDefinition();
