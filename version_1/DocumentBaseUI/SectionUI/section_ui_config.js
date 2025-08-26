
import BaseConfig           from "../../Base/base_config";
import SectionUIUtil        from "./section_ui_util";

class SectionUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new SectionUIUtil(vue_instance, this.content_manager)
    }
}

export default SectionUIConfig;