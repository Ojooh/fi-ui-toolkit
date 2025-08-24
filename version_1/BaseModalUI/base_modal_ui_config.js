
import BaseConfig           from "../Base/base_config";
import BaseModalUIUtil     from "./base_modal_ui_util";


class BaseModalUIConfig extends BaseConfig { 
    constructor(name) { super(name); }

    // Method to get position class style
    getModalPositionClassStyle = (isnatnce_variables) => {
        const { position = "center" } = isnatnce_variables;
        
        if (position === "left") { return "fixed left-0 top-0 h-full"; }

        if (position === "right") { return "fixed right-0 top-0 h-full"; }

        return "relative mx-auto my-auto";
    }

    // Method to get modal size class style
    getModalSizeClassStyle = (isnatnce_variables) => {
        const { position = "center", width } = isnatnce_variables;

        if (position === "left" || position === "right") { return `${width} h-full`; }

        return `${width} max-h-[90vh]`;
    }


    // Method to get modal transition name
    getModaltranstionName = (isnatnce_variables) => {
        const { position = "center", width } = isnatnce_variables;

        if (position === "left") { return "slide-left"; }

        if (position === "right") { return "slide-right"; }

        return "pop-center";
    }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
        this.util               = new BaseModalUIUtil(vue_instance, this.content_manager);
    }

}

export default BaseModalUIConfig;