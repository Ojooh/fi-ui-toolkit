
import { BaseControllerInterface }  from "../types/component_type";
import LoggerUtil                   from "../utils/logger_util";

class BaseEventHandler {
    public readonly name: string;
    public readonly component_name: string;
    protected controller: BaseControllerInterface;
    private logger: LoggerUtil;

    constructor(controller: BaseControllerInterface, component_name: string) {
        this.controller     = controller;
        this.component_name = component_name;
        this.name           = `${component_name}_event_handler`;
        this.logger         = new LoggerUtil({ prefix: this.name, show_timestamp: false });
    }

    // Method to handle click event
    public handleOnClick(event: MouseEvent) { this.logger.log("Clicked!", event); }

}

export default BaseEventHandler;
