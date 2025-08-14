import BaseConfig           from "../../Base/base_config";
import ButtonUIUtil          from "../utils/button_ui_util";
import SVGIcons             from "../../Resources/svg_icon_resource";

class HamburgerButtonUIConfig extends BaseConfig { 
    constructor() { super("hamburger_button_ui_config"); }

    // Method to get computed variable
    getHamburgerSVGIcon = () => { return SVGIcons.hamburger_svg_icon; }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new ButtonUIUtil(vue_instance, this.content_manager);
    }

    // Method to get ui props
    getUIProps() { 
        const hamburger_btn_default_config = {
            hamburger_class_style: "",  hamburger_button_class_style: "", logo_class_style: "",

            btn_icon: null, logo_link: null, logo_content: null, handleOnClickEvent: null,
        };

        return { config: { type: Object, default: hamburger_btn_default_config, required: true }}; 
    }

    // Method to get ui computed data
    getUIComputedData() { 
        return { hamburger_svg_icon: this.getHamburgerSVGIcon }; 
    }

    getUIStateData() { 
        const util = this.util;

        return { util }; 
    }

}

export default HamburgerButtonUIConfig;