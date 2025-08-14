
import LoggerUtil from "../../Logger/logger_util";


class StatusAlertUIUtil {
    constructor (vue_instance, content_manager = {}) {
        this.name               = "status_alert_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    
    // Method to to handle on click of close alert button
    handleOnClickCloseAlertButton = (e) => {
        const box = this.vue_instance?.refs?.alertBox;

        if (box) {
            box.classList.remove("animate-slide-in");
            box.classList.add("animate-slide-out");

            // Wait for animation to finish before hiding
            setTimeout(() => { this.vue_instance.props.visible = false; }, 300);
        }
    }
}

export default StatusAlertUIUtil;