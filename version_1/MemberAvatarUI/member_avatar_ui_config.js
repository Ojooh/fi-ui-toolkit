
import BaseConfig           from "../Base/base_config";

class MemberAvatarUIConfig extends BaseConfig { 
    constructor() { super("member_avatar_ui_config"); }

    // Method to set vue instance
    setVueInstance(vue_instance) {
        this.vue_instance       = vue_instance;
        this.content_manager    = this.vue_instance?.proxy?.$content_manager || {};
    }

    // Method to get ui props
    getUIProps() { 
        return {
            parent_class_style: { type: String, default: "", required: false },

            avatar_circle_class_style: { type: String, default: "", required: false },

            img_link: { type: String, required: false, default: null },

            img_alt_text: { type: String, required: false, default: "" },

            img_class_style: { type: String, default: "", required: false },

            initials_class_style: { type: String, default: "", required: false },

            initials: { type: String, default: "", required: false },

            right_slot_class_style: { type: String, default: "", required: false },

            right_slot: { type: [Object, Function, String], default: null, required: false },

            right_slot_props: { type: Object, default: null, required: false }
        }
    }

    // Method to get ui state data
    getUIStateData() { 
        const util = this.util;
        return { util }; 
    }
}

export default MemberAvatarUIConfig;