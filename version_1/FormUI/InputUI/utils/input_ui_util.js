
import LoggerUtil from "../../../Logger/logger_util";

class InputUIUtil {
    constructor (vue_instance, content_manager = {}) {
        this.name               = "input_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;

        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }

    // Method to handle updating model value
    handleUpdateOTPModelValue = (new_value, index = 0) => {
        this.vue_instance.proxy.$props.value_obj.input_value[index] = new_value;
    }

    // Method to handle on otp inpuut input event
    handleOTPOnInputEvent = (e, index) => {
        const otp_length        = this.vue_instance.proxy.$props?.otp_length || 6;
        const value             = e.target.value.replace(/\D/g, "").charAt(0) || "";
        const next_input_id     = `${this.vue_instance.proxy.$props?.id}_${index + 1}`;
        const next_input_el     = document.getElementById(next_input_id);

        this.handleUpdateOTPModelValue(value, index);

        if (value && index < (otp_length - 1) && next_input_el) { next_input_el?.focus(); }
    };

    handleOTPInputKeyDownEvent = (e, index) => {
        if (e.key === 'Backspace') {
            return this.handleOTPOnBackspaceEvent(e, index);
        }
    }

    // Method to handle on otp input backspace event
    handleOTPOnBackspaceEvent = (e, index) => {
        const current_value     = this.vue_instance.proxy.$props?.value_obj?.input_value[index] || "";
        const prev_input_id     = `${this.vue_instance.proxy.$props?.id}_${index - 1}`;
        const prev_input_el     = document.getElementById(prev_input_id);

        if (current_value === "" && index > 0) {
            this.handleUpdateOTPModelValue("", index);
            prev_input_el?.focus();
        } 
        else { return this.handleUpdateOTPModelValue("", index); }
    };

    // Method to handle on otp input paste event
    handleOTPOnPasteEvent = (e, index) => {
        e.preventDefault();

        const otp_length    = this.vue_instance.proxy.$props?.otp_length || 6;
        const pasted        = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, otp_length);
        const new_value     = Array(otp_length).fill("");
        
        [...pasted].forEach((char, i) => { new_value[i] = char; });

        this.vue_instance.proxy.$props.value_obj.input_value =  new_value;

        const next_input_id     = `${this.vue_instance.proxy.$props?.id}_${pasted.length - 1}`;
        const next_input_el     = document.getElementById(next_input_id);
        
        next_input_el?.focus(); 
    }

    // Method to handle switch toggle
    handleSwitchToggle = async (e) => {
        const { $data, $props } = this.vue_instance.proxy;
        const { handleSwitchToggle } = $props;

        $data.loading = true;

        const updated_state_sucessuflly = await handleSwitchToggle(e, $props);

        if(updated_state_sucessuflly) {
            $props.value_obj.input_value = !$props.value_obj?.input_value;
        }

        $data.loading = false; 
    }
}

export default InputUIUtil;