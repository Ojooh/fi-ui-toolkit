import LoggerUtil from "../Logger/logger_util";

class JSONViewerUIUtil {
    constructor (vue_instance, content_manager = {}) {
        this.name               = "json_viewer_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to get the type of a value
    isObject = (val) => { return typeof val === "object" && val !== null; }

    // Method to toggle the visibility of a JSON object
    toggle = (key) => {
        let { collapsed } = this.vue_instance.proxy.$data;
        if (this.isObject(this.vue_instance?.props?.json_data[key])) {
            collapsed[key] = !collapsed[key];
        }
    }

    // Method to format a value for display
    formatValue = (val) => {
        if (typeof val === "string") { return `"${val}"`; }

        if (val === null) { return "null"; }
        
        if (typeof val === "boolean") { return val ? "true" : "false"; }

        return val.toString();
    }

}

export default JSONViewerUIUtil