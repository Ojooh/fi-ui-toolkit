
import BaseConfig           from "../../Base/base_config";
import DropdownUIUtil       from "./dropdown_ui_util";


class  DropdownUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new DropdownUIUtil(vue_instance, this.content_manager);
    }

}

export default DropdownUIConfig;