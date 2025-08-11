import LoggerUtil from "../../Logger/logger_util";

class BreadcrumbUIUtil {
    constructor () {
        this.name               = "breadcrumb_ui_util"
        this.vue_instance                 = null;
        this.content_manager    = null;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vue_instance                 = vm;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get alignment class style
    getAlignmentClassStyle = (instance_variable) => {
        const { align  } = instance_variable;

        if(align === "start") { return "justify-start" }

        else if(align === "center") { return "justify-center" }

        else if(align === "end") { return "justify-end" }

        else { return "justify_start" }

    }
}

export default BreadcrumbUIUtil;