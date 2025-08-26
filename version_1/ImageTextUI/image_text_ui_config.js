
import BaseConfig           from "../Base/base_config";

class ImageTextUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
    }
}

export default ImageTextUIConfig;