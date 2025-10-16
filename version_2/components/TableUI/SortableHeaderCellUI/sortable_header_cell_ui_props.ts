
import { PropType }                 from "vue";
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";
import { SortDirectionType } from "@v2/types/props_builder_type";


const ui_class_styles  = ComponentClassStyles?.table_ui?.sortable_header_cell_ui;

const SortableHeaderCellUIProps = {
    id: { type: String, required: false },

    label_content: { type: String, required: true },

    field_key: { type: String, required: true },

    sortable: { type: Boolean, default: false },

    sort_direction: { type: String as PropType<SortDirectionType>, default: "none" },

    on_sort: { type: Function as PropType<(event:MouseEvent, dir: SortDirectionType) => void>, default: null },

    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style },

    content_wrapper_class_style: { type: String, default: ui_class_styles.content_wrapper_class_style },

    icon_class_style: { type: String, default: ui_class_styles.icon_class_style },
 
}

export default SortableHeaderCellUIProps;