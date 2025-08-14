

import BaseController               from "../Base/base_controller";
import MemberAvatarUIConfig         from "./member_avatar_ui_config";

class MemberAvatarUIController extends BaseController { 
    constructor() {
        super("member_avatar_ui_controller", new MemberAvatarUIConfig());
    }

}

export default new MemberAvatarUIController().getUIComponentDefinition();
