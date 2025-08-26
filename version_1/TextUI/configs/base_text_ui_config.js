import BaseConfig           from "../../Base/base_config.js";
import TextUIUtil           from "../utils/text_ui_util.js";

class BaseTextUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new TextUIUtil(vue_instance, this.content_manager);
    }
}

export default BaseTextUIConfig;