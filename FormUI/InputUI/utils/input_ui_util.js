
import SVGIcons from "../../../Resources/svg_icon_resource";
import LoggerUtil from "../../../Logger/logger_util";

class InputUIUtil {
    constructor () {
        this.name           = "input_ui_util"
        this.vm             = null
        this.logger         = new LoggerUtil({ prefix: this.name.toUpperCase() });
    }

    // Method to set vue instance
    setVueInstance = (vm) => {
        this.vm  = vm;
    }

    // Method to handle on otp inpuut input event
    handleOnInputEvent = (e, index) => {
        const otp_length        = this.vm.props?.config?.otp_length || 6;
        const value             = e.target.value.replace(/\D/g, "").charAt(0) || "";
        const next_input_id     = `${this.vm.props?.config?.id}_${index + 1}`;
        const next_input_el     = document.getElementById(next_input_id);


        this.vm.props.config.value[index] = value;

        if (value && index < (otp_length - 1) && next_input_el) { next_input_el?.focus(); }
    };

    // Method to handle on otp input backspace event
    handleOnBackspaceEvent = (e, index) => {
        const otp_length        = this.vm.props?.config?.otp_length || 6;
        const current_value     = this.vm.props.config.value[index] || "";
        const next_input_id     = `${this.vm.props?.config?.id}_${index - 1}`;
        const next_input_el     = document.getElementById(next_input_id);

        this.vm.props.config.value[index] = "";


        if (current_value === "" && index > 0) { next_input_el.focus(); }
    };

    // Method to handle on otp input paste event
    handleOnPasteEvent = (e, index) => {
        e.preventDefault();

        const otp_length        = this.vm.props?.config?.otp_length || 6;
        const pasted =           e.clipboardData.getData('text').replace(/\D/g, '').slice(0, otp_length);

        [...pasted].forEach((char, i) => { this.vm.props.config.value[i] = char; });

        const next_input_id     = `${this.vm.props?.config?.id}_${pasted.length - 1}`;
        const next_input_el     = document.getElementById(next_input_id);
        
        next_input_el?.focus(); 
    }

    // Method to get search input  btn svg icon
    getSearchBtnSvgIcon = () => { return SVGIcons.search_svg_icon; }

    

}

export default InputUIUtil