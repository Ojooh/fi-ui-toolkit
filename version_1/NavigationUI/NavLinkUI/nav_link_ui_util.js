
import LoggerUtil from "../../Logger/logger_util";

class NavLinkUIUtil {
    constructor (vue_instance, content_manager) {
        this.name               = "nav_link_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to handle on click event
    handleOnClickEvent = (event) => {
        const { link, on_click } = this.vue_instance?.proxy?.props;
        
        if (!link && on_click) { on_click(event); }
    }

}

export default NavLinkUIUtil;