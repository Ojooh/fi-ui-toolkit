import { PropType }             from "vue";
import { ComponentClassStyles } from "../../enums/component_class_styles.enums";
import SVGIcons                 from "../../resources/svg_icon_resource";

const ui_class_styles       = ComponentClassStyles.modal_ui;

const ModalUIProps   = {
    is_open: { type: Boolean, required: true },

    layer: { type: Number, default: 0, required: true },

    position: { type: String, default: "center" }, 

    width: { type: String, default: "w-[600px]" },

    title_content: { type: String, default: "", required: false },

    close_btn_content: { type: String, default: SVGIcons.x_circile_svg_icon , required: false },

    loader_content_text: { type: String, default: "", required: false },

    body_component: { type: Object, default: null, required: false },

    body_props: { type: Object, default: () => { return {} }, required: false },

    overlay_class_style: { type: String, default: ui_class_styles.overlay_class_style },

    modal_position_class_style: { type: String, default: ui_class_styles.modal_position_class_style },
    
    modal_size_class_style: { type: String, default: ui_class_styles.modal_size_class_style },
    
    modal_box_class_style: { type: String, default: ui_class_styles.modal_box_class_style },

    header_wrapper_class_style: { type: String, default: ui_class_styles.header_wrapper_class_style },

    header_title_content_class_style: { type: String, default: ui_class_styles.header_title_content_class_style },

    header_title_class_style: { type: String, default: ui_class_styles.header_title_class_style },

    header_close_btn_content_class_style: { type: String, default: ui_class_styles.header_close_btn_content_class_style },

    close_btn_class_style: { type: String, default: ui_class_styles.close_btn_class_style },

    body_class_style: { type: String, default: ui_class_styles.body_class_style },

    on_modal_close: { 
         type: Function as PropType<(event: MouseEvent, layer: number) => boolean>,
        default: null, required: false 
    },
}

export default ModalUIProps;