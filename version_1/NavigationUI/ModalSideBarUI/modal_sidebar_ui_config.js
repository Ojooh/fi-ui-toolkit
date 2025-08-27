
import BaseConfig           from "../../Base/base_config";
import ModalSidebarUIUtil   from "./modal_sidebar_ui_util";

class  ModalSidebarUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new ModalSidebarUIUtil(vue_instance, this.content_manager);
    }

    // Method to get position class style
    getPositionClassStyle = (instance_variable) => {
        const { position } = instance_variable?.$props;
        return position === "right" ? "right-0" : "left-0"
    }

    // Method to get show class style
    getShowClassStyle = (instance_variable) => {
        const { position, show } = instance_variable.$props;
        return show ? "translate-x-0" : (position === "right" ? "translate-x-full" : "-translate-x-full");
    }

    
}

export default ModalSidebarUIConfig;