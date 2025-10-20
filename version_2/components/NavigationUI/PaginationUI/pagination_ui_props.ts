import { PropType }                 from "vue";
import { ComponentClassStyles }     from "../../../enums/component_class_styles.enums";

const ui_class_styles       = ComponentClassStyles?.navigation_ui?.pagination_ui;

const PaginationUIProps   = {
    wrapper_class_style: { type: String, default: ui_class_styles.wrapper_class_style, required: false },

    prev_button_class_style: { type: String, default: ui_class_styles.prev_button_class_style, required: false },

    next_button_class_style: { type: String, default: ui_class_styles.next_button_class_style, required: false },

    disabled_class_style: { type: String, default: ui_class_styles.disabled_class_style, required: false }, 

    select_class_style: { type: String, default: ui_class_styles.select_class_style, required: false },

    prev_btn_content: { type: String, default: "Prev", required: false }, 

    next_btn_content: { type: String, default: "Next", required: false },

    show_loader: { type: Boolean, default: true, required: false },

    loader_content_text: { type: String, default: "", required: false },

    render_page_content: {
        type: Function as PropType<(page: number) => string | number | HTMLElement>,
        default: (page: number) => `Page ${page}`,
    },

    total_pages: { type: Number, required: true },

    current_page: { type: Number, required: true },

    select_id: { type: String, required: false },

    on_prev_clicked:  { type: Function, default: null, required: false },

    on_next_clicked:  { type: Function, default: null, required: false },

    on_new_page_clicked:  { type: Function, default: null, required: false },

}

export default PaginationUIProps;