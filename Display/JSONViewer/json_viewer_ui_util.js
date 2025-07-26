import LoggerUtil from "../../Logger/logger_util";

class JSONViewerUIUtil {
    constructor (name, vue_isnatnce) {
        this.name       = "json_viewer_ui_util";
        this.vm         = vue_isnatnce;
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() })
    }

    // Method to get the type of a value
    isObject = (val) => { return typeof val === "object" && val !== null; }

    // Method to toggle the visibility of a JSON object
    toggle = (key) => {
        if (this.isObject(this.vm?.props?.json_data[key])) {
            this.vm.data.collapsed[key] = !this.vm?.data?.collapsed[key];
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