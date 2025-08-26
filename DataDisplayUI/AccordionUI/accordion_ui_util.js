import LoggerUtil from "../../Logger/logger_util";

class AccordionUIUtil {
    constructor (name, vue_isnatnce) {
        this.name       = "accordion_ui_uitl";
        this.vue_instance         = vue_isnatnce;
        this.logger     = new LoggerUtil({ prefix: this.name.toUpperCase() })
    }

    // Method to hide all accordion bodies
    #hideAllBodies = (group_id, current_head_id, current_body_id, head_show_class, head_hide_class, body_show_class, body_hide_class) => {
        const all_accordions = document.getElementsByClassName(`accordion-${group_id}-head`);

        for (const accordion of all_accordions) {
            const { id: head_id }   = accordion;
            const body_id           = head_id.replace("head", "body");

            if(head_id === current_head_id || body_id === current_body_id) { continue }

            const head_el           = accordion;
            const body_el           = body_id ? document.getElementById(body_id) : null;

            if(!head_el || !body_el) { continue }

            this.#hideBody(head_el, body_el, head_show_class, head_hide_class, body_show_class, body_hide_class );
        }
    }

    // Method to hide accordion body
    #hideBody = (head_el, body_el, head_show_class, head_hide_class, body_show_class, body_hide_class ) => {
        body_el.classList.remove(...body_show_class);
        body_el.classList.add(...body_hide_class);

        head_el.classList.remove(...head_show_class);
        head_el.classList.add(...head_hide_class);

        return;
    }

    // Method to show accordion body
    #showBody = (head_el, body_el, head_show_class, head_hide_class, body_show_class, body_hide_class ) => {
        body_el.classList.remove(...body_hide_class);
        body_el.classList.add(...body_show_class);

        head_el.classList.remove(...head_hide_class);
        head_el.classList.add(...head_show_class);

        return;
    }

    // Method to show body
    toggleBody = (e) => {
        const head_id      = e?.target?.id || e?.target?.parentElement ?.id || e?.target?.parentElement?.parentElement?.id || e?.target?.parentElement?.parentElement?.parentElement?.id;

        const { 
            id, group_id,
            accordion_head_class_style, accordion_head_show_class_style, 
            accordion_body_class_style, accordion_body_show_class_style 
        }   = this.vue_instance?.proxy?.$props;
        const body_id               = head_id.replace("head", "body");
        const head_show_class       = accordion_head_show_class_style.split(" ");
        const head_hide_class       = accordion_head_class_style.split(" ");
        const body_show_class       = `${accordion_body_show_class_style} block`.split(" ");
        const body_hide_class       = `${accordion_body_class_style} hidden`.split(" ");
        const head_el               = head_id ? document.getElementById(head_id) : null;
        const body_el               = body_id ? document.getElementById(body_id) : null;

        if(!head_el || !body_el) { return this.logger.error(`[${this.name} Component] Error invalid element for head ${head_el} or body ${body_el}`); }

        const is_showing            = body_el.classList.contains("block");

        this.#hideAllBodies(group_id, head_id, body_id, head_show_class, head_hide_class, body_show_class, body_hide_class) 
        
        if (is_showing) { return this.#hideBody(head_el, body_el, head_show_class, head_hide_class, body_show_class, body_hide_class ); }

        else { return this.#showBody (head_el, body_el, head_show_class, head_hide_class, body_show_class, body_hide_class); }

    }

    // Method to return util methods in object
    getUtilMethods = () => {
        return {
            toggleBody: this.toggleBody
        }
    }
}

export default AccordionUIUtil