
import BaseConfig    from "../../Base/base_config";

class BreadcrumbUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to get alignment class style
    getAlignmentClassStyle = (instance_variable) => {
        const { align  } = instance_variable;

        if(align === "start") { return "justify-start" }

        else if(align === "center") { return "justify-center" }

        else if(align === "end") { return "justify-end" }

        else { return "justify_start" }

    }
}

export default BreadcrumbUIConfig;