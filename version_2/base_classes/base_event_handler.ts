
import { BaseControllerInterface }  from "../types/component_type";
import LoggerUtil                   from "../utils/logger_util";

class BaseEventHandler {
    public readonly name: string;
    protected controller: BaseControllerInterface;
    private logger: LoggerUtil;

    constructor(controller: BaseControllerInterface, component_name: string) {
        this.controller     = controller;
        this.name           = `${component_name}_event_handler`;
        this.logger         = new LoggerUtil({ prefix: this.name, show_timestamp: false });
    }

    // Method to handle click event
    public handleOnClick(event: MouseEvent) { this.logger.log("Clicked!", event); }

    // Method to handle key down event
    public handleOnKeyDown(event: KeyboardEvent) { this.logger.log("Key pressed:", event.key); }
}

export default BaseEventHandler;
