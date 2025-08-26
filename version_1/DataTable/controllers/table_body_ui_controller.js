
import BaseController       from "../../Base/base_controller";
import TableBodyUIConfig    from "../configs/table_body_ui_config";

import DropdownUI           from "../../NavigationUI/DropdownUI/dropdown_ui.vue";
import CheckboxInputUI      from "../../FormUI/InputUI/checkbox_inpit_ui.vue";

class TableBodyUIController extends BaseController { 
    constructor() { super("table_body_ui", TableBodyUIConfig); }

    // Method to get ui components
    getUIComponents() { return { DropdownUI, CheckboxInputUI }; }

    // Method to get ui props
    getUIProps() { 
        return {   
            table_body_class_style: { type: String, default: "", required: false },
            
            table_body_row_class_style: { type: String, default: "", required: false },

            table_body_cell_class_style: { type: String, default: "", required: false },

            records: { type: Array, default: [], required: true },

            has_action_menu: { type: Boolean, default: false },

            column_renderers: { type: Array, required: true, validator: this.config.getColumnRendererValidator },

            select_mode: { type: Boolean, default: false },

            is_selected: { type: Function, default: () => { return false }, required: false },

            checkbox_id: { type: String, default: "record_select", required: false },

            action_menu_props: { type: Object, default: {}, required: false },

            onRecordRowSelected: { type: Function, default: null, required: false }
        }
    }

}

export default new TableBodyUIController().getUIComponentDefinition();
