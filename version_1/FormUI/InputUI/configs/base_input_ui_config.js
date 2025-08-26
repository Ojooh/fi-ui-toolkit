import BaseConfig           from "../../../Base/base_config";
import InputUIUtil          from "../utils/input_ui_util";
import SVGIcons             from "../../../Resources/svg_icon_resource";

class BaseInputUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new InputUIUtil(vue_instance, this.content_manager);
    }

    // Method to get value proxy
    getComputedValueProxy = (instance_variables) => {
        const get = () => { return instance_variables.modelValue  }
        const set = (val) => { instance_variables.$emit("update:modelValue", val); }
        
        return { get, set }
    }

    // Method to get search input  btn svg icon
    getSearchBtnSvgIcon = () => { return SVGIcons.search_svg_icon; }
}

export default BaseInputUIConfig;