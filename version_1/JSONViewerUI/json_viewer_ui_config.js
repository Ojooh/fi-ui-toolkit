
import BaseConfig           from "../Base/base_config";
import JSONViewerUIUtil     from "./json_viewer_ui_util";

class JSONViewerUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.util               = new JSONViewerUIUtil(vue_instance, this.content_manager)
    }

    // Method to get ui state data
    getUIStateData() { 
        const collapsed     = {};

        return { collapsed }; 
    }


}

export default JSONViewerUIConfig;