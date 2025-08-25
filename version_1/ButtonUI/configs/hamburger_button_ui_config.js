import BaseConfig           from "../../Base/base_config";
import ButtonUIUtil          from "../utils/button_ui_util";
import SVGIcons             from "../../Resources/svg_icon_resource";

class HamburgerButtonUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to get computed variable
    getHamburgerSVGIcon = () => { return SVGIcons.hamburger_svg_icon; }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new ButtonUIUtil(vue_instance, this.content_manager);
    }
}

export default HamburgerButtonUIConfig;