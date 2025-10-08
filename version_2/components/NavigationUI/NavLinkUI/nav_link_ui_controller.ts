
import { useRoute }                 from "vue-router";
import BaseController               from "../../../base_classes/base_controller";
import NavLinkUIEventHandler        from "./nav_link_ui_event_handler";

class NavLinkUIController extends BaseController {
    public event_handler: NavLinkUIEventHandler

    constructor(props: Record<string, any> = {}) {
        super("nav_link_ui", props);

        this.event_handler = new NavLinkUIEventHandler(this);
    }

    // Method to get ui state data
    protected getUIStateData(): Record<string, any> { 
        return {}
    }

    // Method to to get ui computed data
    protected getUIComputedData(): Record<string, () => any> { 
        const isRouterLink = (link?: string) => !!link && link.startsWith("/");
        const isAnchor     = (link?: string) => !!link && /^https?:\/\//.test(link);
        const route        = useRoute();

        return {
            component_type: () => {
               const { link } = this.props;
                if (isRouterLink(link)) { return "router-link"; }

                if (isAnchor(link)) { return "a"; }
                
                return "div";
            },

            route_link: () => {
                const { link } = this.props;
                return isRouterLink(link) ? link :  undefined;
            },

            anchor_link: () => {
                const { link } = this.props;
                return isAnchor(link) ? link :  undefined;
            },

            anchor_target: () => {
                const { link } = this.props;
                return isAnchor(link) ? "_blank" :  undefined;
            },

            is_active_computed: () => {
                try {
                    const { id, is_active } = this.props;

                    if(id === route.name) { return true }

                    return is_active?.(this.props.id) ?? false;
                } catch {
                    return false;
                }
            },
        }; 
    }

}

export default NavLinkUIController;