
import BaseEventHandler from "../../../base_classes/base_event_handler";
import type { BaseControllerInterface } from "../../../types/component_type";

class TableBodyUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on record selected
    public handleOnRecordSelect(event: Event | InputEvent, record: Record<string, any>) {
        const { on_row_select } = this.controller.props;

        const target = event.target as HTMLInputElement;
        const is_checked = target?.checked;

        if (!on_row_select) return;

        on_row_select(event, record, is_checked);
    }

    // Method to check if record is selected
    public isRecordSelected(record: Record<string, any>) {
        const { props }                 = this.controller
        const { record_id_key: key }    = props;

        return props.selected_records.some((r: string | number | Record<string, any>) =>
            typeof r === "object" ? r[key] === record[key] : r === record[key]
        );
    }
}

export default TableBodyUIEventHandler;
