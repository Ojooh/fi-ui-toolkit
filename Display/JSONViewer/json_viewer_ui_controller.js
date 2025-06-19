import { getCurrentInstance } from "vue";

import LoggerUtil from "../../Logger/logger_util";
import JSONViewerUIUtil from "./json_viewer_ui_util";

import SVGIcons from "../../Resources/svg_icon_resource";


class JSONViewerUIController{
    constructor() {
        this.name       = "json_viewer_ui_controller";
        this.vm         = null; 
        this.util       = null;
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Public method to expose components
    getUIComponents = () => { return {  }; };

    // Method to get ui props
    getUIProps = () => {        
        return {
            json_data: { type: [Object, Array], default: {}, required: true },
        }
    }

    // State data
    getAppStateData = () => {
        this.vm         = getCurrentInstance();
        this.util       = new JSONViewerUIUtil(this.name, this.vm);
        return { collapsed: {}, util: this.util } 
    };

    // Computed variables
    getAppComputedVariables = () => { return { }; };

    // Watchers
    getAppWatchers = () => { return { } };

    // Lifecycle: created
    handleOnCreatedLogic = () => {
        try {
            this.logger .log(`[Created] Component ${this.name} has been created`);
        } catch (error) {
            this.logger .error(`[Created] Error in Component ${this.name}:`, error);
        }
    };

    // Lifecycle: mounted
    handleOnMountedLogic = () => {
        try {
            this.logger .log(`[Mounted] Component ${this.name} has been mounted`);
        } catch (error) {
            this.logger .error(`[Mounted] Error in component ${this.name}:`, error);
        }
    };

    // Lifecycle: beforeUnmount
    handleBeforeUnmountedLogic = () => {
        try {
            this.logger .log(`[BeforeUnmount] Component ${this.name} will unmount`);
        } catch (error) {
            this.logger .error(`[BeforeUnmount] Error in component ${this.name}:`, error);
        }
    };

    // Get final Vue component definition
    setVueJson = () => {
        return {
            name: "JSONViewerUI",
            components: this.getUIComponents(),
            props: this.getUIProps(),
            data: this.getAppStateData,
            computed: this.getAppComputedVariables(),
            watch: this.getAppWatchers(),
            created: this.handleOnCreatedLogic,
            mounted: this.handleOnMountedLogic,
            beforeUnmount: this.handleBeforeUnmountedLogic,
        };
    };
}

export default new JSONViewerUIController().setVueJson();