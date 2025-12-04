

import BaseEventHandler             from "../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../types/component_type";


class MaskedRevealUIEventHandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Private method to reveal secret data
    private revealSecretData (): void {
        const { props = {}, state_refs = {} } = this.controller;

        const { is_revealed, remaining_seconds, timer } = state_refs;

        is_revealed.value       = true;
        remaining_seconds.value = Math.floor(props.reveal_duration_in_seconds);

        timer.value = setInterval(() => {
            remaining_seconds.value -= 1;
            if (remaining_seconds.value <= 0) { this.hideSecretData (); };
        }, 1000);

    }

    // Private method to hide secret data
    private hideSecretData (): void {
        const { props = {}, state_refs = {} } = this.controller;

        const { is_revealed, remaining_seconds, timer } = state_refs;

        is_revealed.value           = false;
        remaining_seconds.value     = 0;

        if (timer.value) { clearInterval(timer.value); }
    };

    public async handleToggleReveal (event: MouseEvent) {
        const { props = {}, state_refs = {} }    = this.controller;
        const { is_revealed }                   = state_refs
        const { on_toggle_reveal_click }        = props;
        let result:boolean                      = true

        if (on_toggle_reveal_click) { 
            result = await on_toggle_reveal_click(event);
        }

        if(!result) { return }

        if (is_revealed.value) { this.hideSecretData(); }
        
        else { this.revealSecretData(); }

        
    }

    public async handleOnCopyBtnClick (event: MouseEvent) {
        try {
            const { props = {}, state_refs = {} }    = this.controller;
            const { on_copy_click }                 = props;
            const { is_copied }                     = state_refs;
            let result:boolean                      = true
            
            await navigator.clipboard.writeText(props.secret_data);

            is_copied.value = true;

            setTimeout(() => { is_copied.value = false; }, 5000);

            if (on_copy_click) { 
                result = await on_copy_click(event);
            }
        
        } catch (error) {
            console.error("Failed to copy secret data:", error);
        }
    }

}

export default MaskedRevealUIEventHandler;