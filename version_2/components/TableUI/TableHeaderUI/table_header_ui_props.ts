import { PropType }                 from "vue";
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

import { 
    TableColumnInterface 
} from "../../../types/props_builder_type";

const ui_class_styles  = ComponentClassStyles?.table_ui?.table_header_ui;

const TableHeaderUIProps = {
    columns: { type: Array as PropType<TableColumnInterface[]>, required: true },
    
    sn_text: { type: String, default: "#" },
    
    actions_text: { type: String, default: "Actions" },
    
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style },

    header_row_class_style: { type: String, default: ui_class_styles.header_row_class_style },

    header_cell_class_style: { type: String, default: ui_class_styles.header_cell_class_style },
}

export default TableHeaderUIProps;

