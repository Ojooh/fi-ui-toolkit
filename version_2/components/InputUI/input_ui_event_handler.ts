
import BaseEventHandler             from "../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../types/component_type";
import { InputEventMethodOptions }  from "../../types/input_ui_type";

class InputUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to handle on key up event
    public handleOnKeyUp (event: KeyboardEvent, options?: InputEventMethodOptions) {
        const { on_key_up } = this.controller.props;

        if(!on_key_up) { return; }

        on_key_up(event);
    }

    // Method to handle on key down event
    public handleOnKeyDown (event: KeyboardEvent, options?: InputEventMethodOptions) {
        const { on_key_down } = this.controller.props;

        if(!on_key_down) { return; }

        on_key_down(event);
    }

    // Method to handle on click event
    public handleOnClick (event: MouseEvent, options?: InputEventMethodOptions) {
        const { on_click } = this.controller.props;

        if(!on_click) { return; }

        on_click(event);
    }

    // Method to handle on change event
    public handleOnChange (event: Event | InputEvent, options?: InputEventMethodOptions) {
        const { on_change } = this.controller.props;

        const new_value = this.controller.state_refs.input_value.value;

        if(!on_change) { return; }

        on_change(event, new_value);
    }

    // Method to handle switch toggle
    public async handleSwitchToggle (event: MouseEvent, options?: InputEventMethodOptions) {
        try {
            const { on_click }              = this.controller.props;
            const current_active_value_ref  = this.controller.state_refs.input_value
            const is_loading_ref            = this.controller.state_refs.is_loading;
            is_loading_ref.value            = true;

            if (!on_click) { return; }

            let result = on_click(event);

            if (result instanceof Promise) { result = await result; }

            const boolean_result = result ? !current_active_value_ref.value : current_active_value_ref.value;

            this.controller.state_refs.input_value.value = boolean_result;
        } 
        catch (error) {
            console.error(`[${this.controller.name}] handleOnClick error:`, error);
        } 
        finally {
            this.controller.state_refs.is_loading.value = false;
        }
    }

    // ---------- OTP-specific Helpers ----------
    private updateOTPModelValue(event: Event | KeyboardEvent, new_value: string, index: number) {
        const { on_change } = this.controller.props;
        const input_array   = this.controller.state_refs.input_value.value as string[];
        input_array[index]  = new_value;
        on_change(event, input_array.join(""));
    }

    public handleOTPOnInput(event: Event, index: number) {
        const el    = event.target as HTMLInputElement;
        const value = el.value.replace(/\D/g, "").charAt(0) || "";

        this.updateOTPModelValue(event, value, index);

        const otp_length    = this.controller.props.length || (this.controller.state_refs.input_value as string[]).length;
        const next_input    = document.getElementById(`${this.controller.props.id}_${index + 1}`) as HTMLInputElement;

        if (value && index < otp_length - 1 && next_input) { next_input?.focus(); }
    }

    public handleOTPOnKeyDown(event: KeyboardEvent, index: number) {
        const { on_key_down } = this.controller.props;

        if (event.key === "Backspace") { this.handleOTPOnBackspace(event, index); }

        if(!on_key_down) { return; }

        on_key_down(event);
    }

    public handleOTPOnBackspace(event: KeyboardEvent, index: number) {
        const input_array       = this.controller.state_refs.input_value as string[];
        const current_value     = input_array[index] || "";
        const prev_input        = document.getElementById(`${this.controller.props.id}_${index - 1}`) as HTMLInputElement;

        if (current_value === "" && index > 0) {
            this.updateOTPModelValue(event, "", index);
            prev_input?.focus();
        } 
        else { this.updateOTPModelValue(event, "", index); }
    }

    public  handleOTPOnPaste(event: ClipboardEvent, index: number) {
        event.preventDefault();
        const { on_change } = this.controller.props;
        const otp_length    = this.controller.props.length || (this.controller.state_refs.input_value as string[]).length;
        const pasted        = event.clipboardData?.getData("text").replace(/\D/g, "").slice(0, otp_length) || "";
        const new_value     = Array(otp_length).fill("");

        [...pasted].forEach((char, i) => (new_value[i] = char));

        this.controller.state_refs.input_value.value = new_value;

        const next_input = document.getElementById(`${this.controller.props.id}_${pasted.length - 1}`) as HTMLInputElement;
        next_input?.focus();

        if(!on_change) { return; }

        on_change(event, new_value.join(""));
    }
}

export default InputUIEventHandler;