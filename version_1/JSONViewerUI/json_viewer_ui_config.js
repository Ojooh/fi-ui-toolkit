
import BaseConfig           from "../Base/base_config";
import JSONViewerUIUtil     from "./json_viewer_ui_util";

class JSONViewerUIConfig extends BaseConfig { 
    constructor() { super("json_viewer_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new JSONViewerUIUtil(vue_instance, this.content_manager)
    }

    // Method to get ui props
    getUIProps() { 
        return {
            json_data: { type: [Object, Array], default: {}, required: true },
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util          = this.util;
        const collapsed     = {};

        return { util, collapsed }; 
    }
}

export default JSONViewerUIConfig;