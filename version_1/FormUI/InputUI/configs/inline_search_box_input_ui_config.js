import BaseConfig           from "../../../Base/base_config";
import InputUIUtil          from "../utils/input_ui_util";
import SVGIcons             from "../../../Resources/svg_icon_resource";

class InlineSearchBoxInputUIConfig extends BaseConfig { 

    constructor() { super("inlint_search_box_input_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputUIUtil(vue_instance, this.content_manager);
    }

    // Method to get search input  btn svg icon
    getSearchBtnSvgIcon = () => { return SVGIcons.search_svg_icon; }

    // Method to get ui props
    getUIProps() { 
        const input_ui_default_config = {
            id: "search_id", name: "text", value: null, placeholder: null, 

            required: false, input_class_style: null,  wrapper_class_style: "", search_btn_class_style: "",
            
            handleInputKeyUpEvent: null, handleInputKeyDownEvent: null, handleInputClickEvent: null
        };

        return { config: { type: Object, default: input_ui_default_config, required: true }}; 
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return { search_btn_icon: this.getSearchBtnSvgIcon }; 
    }

    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default InlineSearchBoxInputUIConfig;