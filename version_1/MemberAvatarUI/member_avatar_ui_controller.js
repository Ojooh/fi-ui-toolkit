

import BaseController               from "../Base/base_controller";
import MemberAvatarUIConfig         from "./member_avatar_ui_config";

class MemberAvatarUIController extends BaseController { 
    constructor() { super("member_avatar_ui", MemberAvatarUIConfig); }

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


}

export default new MemberAvatarUIController().getUIComponentDefinition();
