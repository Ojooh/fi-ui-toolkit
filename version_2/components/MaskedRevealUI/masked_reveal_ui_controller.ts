
import { ref }                      from "vue";
import BaseController               from "../../base_classes/base_controller";
import MaskedRevealUIEventHandler  from "./masked_reveal_ui_event_handler";

class MaskedRevealUIController extends BaseController {
    public event_handler: MaskedRevealUIEventHandler;

    constructor(props: Record<string, any> = {}) {
        super("masked_reveal_ui", props);

        this.event_handler = new MaskedRevealUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {
            is_revealed: ref(false),

            is_copied: ref(false),
            
            remaining_seconds: ref(0),
            
            timer: ref<NodeJS.Timeout | null>(null),
        } 
    }

    protected async handleOnMountedLogic(): Promise<void> {
        if (this.state_refs.timer.value) {
            clearInterval(this.state_refs.timer.value);
        }
    }

}

export default MaskedRevealUIController;