import { PropType }                 from "vue";
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

import { 
    TableHeaderUIPropsInterface,
    TableBodyUIPropsInterface
} from "../../../types/props_builder_type";



const ui_class_styles  = ComponentClassStyles?.table_ui?.data_table_ui;

const DataTableUIProps = {
    table_id: { type: String, required: false },

    is_loading: { type: Boolean, default: true, required: false },

    number_of_loading_bars: { type: Number, default: 12, required: false },

    header_props: { type: Object as PropType<TableHeaderUIPropsInterface>, required: true },

    body_props: { type: Object as PropType<TableBodyUIPropsInterface>, required: true },

    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    table_class_style: { type: String, default: ui_class_styles.table_class_style, required: false },

    lg_table_wrapper_class_style: { type: String, default: ui_class_styles.lg_table_wrapper_class_style, required: false},
};

export default DataTableUIProps;
