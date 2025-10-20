import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";

class PaginationUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on prev btn click event
    public async handlePrevBtnClick(event: MouseEvent): Promise<void> {
        this.controller.state_refs.prev_btn_clicked.value = true;
        try {
            const { on_prev_clicked }   = this.controller.props;
            const selected_page         = this.controller.state_refs.selected_page.value;

            if (!on_prev_clicked || selected_page <= 1) { return; }

            let result = on_prev_clicked(event, (selected_page - 1));

            if (result instanceof Promise) { result = await result; }

            const new_page_value = result ? (selected_page - 1)  : selected_page;

            this.controller.state_refs.selected_page.value = new_page_value;
        } 
        catch (error) {
            console.error(`[${this.controller.name}] handlePrevBtnClick error:`, error);
        } 
        finally {
            this.controller.state_refs.prev_btn_clicked.value = false;
        }
    }

    // Method to handle on next btn click event
    public async handleNextBtnClick(event: MouseEvent): Promise<void> {
        this.controller.state_refs.next_btn_clicked.value = true;
        try {
            const { on_next_clicked, total_pages }   = this.controller.props;

            const selected_page         = this.controller.state_refs.selected_page.value;

            if (!on_next_clicked || selected_page >= total_pages) { return; }

            let result = on_next_clicked(event, (selected_page + 1));

            if (result instanceof Promise) { result = await result; }

            const new_page_value = result ? (selected_page + 1)  : selected_page;

            this.controller.state_refs.selected_page.value = new_page_value;
        } 
        catch (error) {
            console.error(`[${this.controller.name}] handleNextBtnClick error:`, error);
        } 
        finally {
            this.controller.state_refs.next_btn_clicked.value = false;
        }
    }

    // Method to handle on page selected event
    public async handleOnNewPageSelected(event: Event | InputEvent): Promise<void> {
        this.controller.state_refs.next_btn_clicked.value = true;
        this.controller.state_refs.prev_btn_clicked.value = true;
        try {
            const { on_new_page_clicked, total_pages }   = this.controller.props;

            const selected_page                 = this.controller.state_refs.selected_page.value;
            const selected_page_is_invalid      = (selected_page < 1) || (selected_page > total_pages)

            if (!on_new_page_clicked || selected_page_is_invalid) { return; }

            let result = on_new_page_clicked(event, selected_page);

            if (result instanceof Promise) { result = await result; }
        } 
        catch (error) {
            console.error(`[${this.controller.name}] handleOnNewPageSelected error:`, error);
        } 
        finally {
            this.controller.state_refs.next_btn_clicked.value = false;
            this.controller.state_refs.prev_btn_clicked.value = false;
        }
    }
    

}

export default PaginationUIEventHandler;