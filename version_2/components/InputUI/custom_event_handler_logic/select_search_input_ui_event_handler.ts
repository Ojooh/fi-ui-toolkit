import BaseEventHandler             from "../../../base_classes/base_event_handler";
import { BaseControllerInterface }  from "../../../types/component_type";
import { 
    InputEventMethodOptions, 
    SearchSelectInputControllerAttributesInterface 
}  from "../../../types/input_ui_type";

class SelectSearchInputUIEventhandler extends BaseEventHandler {
    constructor(controller: BaseControllerInterface) {
        super(controller, controller.component_name);
    }

    // Method to update controller attributes
    private updateControllerAttributes (
        updated_attr: SearchSelectInputControllerAttributesInterface
    ): boolean {
        const { 
            is_open, is_loading_records,  search_selected_text, record_options,
            current_page = 1, total_pages = 0
        } = updated_attr;

        if(typeof is_open === "boolean") {
            this.controller.is_open = is_open
            this.controller.state_refs.is_open.value = is_open;
        }

        if(typeof is_loading_records === "boolean") {
            this.controller.is_loading_records = is_loading_records
            this.controller.state_refs.is_loading_records.value = is_loading_records;
        }

        if(typeof search_selected_text === "string" || search_selected_text === null) {
            this.controller.search_selected_text = search_selected_text
            this.controller.state_refs.search_selected_text.value = search_selected_text;
        }


        if(Array.isArray(record_options)) {
            this.controller.record_options = record_options
            this.controller.state_refs.record_options.value = record_options;
        }

        if(Number.isInteger(current_page)) {
            this.controller.current_page = current_page
            this.controller.state_refs.current_page.value = current_page;
        }

        if(Number.isInteger(total_pages)) {
            this.controller.total_pages = total_pages
            this.controller.state_refs.total_pages.value = total_pages;
        }

        return true
    }

    // Method to handle on search input update
    public onSearchInput (event: Event) {
        const target_el                     = (event.target as HTMLInputElement);
        const updated_search_selected_text  = target_el?.value || null;

        this.updateControllerAttributes({ search_selected_text: updated_search_selected_text  })
        return;
    }

    // Method to handle on option selected
    public onOptionSelected(event: Event, option: Record<string, any>): any {
        const { props }                     = this.controller;
        const value                         = props?.get_option_value(option) ?? "";
        const updated_search_selected_text  = props.render_option_label(option);

        this.updateControllerAttributes({ is_open: false, search_selected_text: updated_search_selected_text })

        return value;
    }

    // Methos to handle on drodpwn scroll
    public handleScroll (event: Event) {
        const { current_page = 1, total_pages = 0, search_selected_text = "" } = this.controller;

        const target_el                 = (event.target as HTMLElement);
        const has_scrolled_to_bottom    = target_el.scrollTop + target_el.clientHeight >= target_el.scrollHeight - 5;
        const has_unfetched_pages       = current_page < total_pages

        if ( has_scrolled_to_bottom && has_unfetched_pages) {
            this.updateControllerAttributes({ current_page: (current_page + 1)});
            this.fetchRecordOptions(search_selected_text);
        }
    }

    // Method to toggle dropdown
    public toggleDropdown  (value: boolean) {
        const { record_options = [], search_selected_text = "" } = this.controller;

        this.updateControllerAttributes({ is_open: value})

        if (value && !record_options.length) {
            this.fetchRecordOptions(search_selected_text);
        }
    }

    // Method to fetch record option(s)
    public async fetchRecordOptions(keyword = "") {
        const { props, current_page = 1, cache, size = 20, record_options = [] } = this.controller;

        this.updateControllerAttributes({ is_loading_records: true });

        try {
            const { fetch_method, cache_enabled = true, additional_parms = {} } = props;

            if (!fetch_method) { return; }

            const cache_key             = `${fetch_method?.name}_${keyword}_${current_page}`;
            const params                = { page: current_page, keyword, size, preview_only: true, ...additional_parms };
            let updated_record_options  = [];

            
            if (cache_enabled && cache.has(cache_key)) {
                updated_record_options = current_page === 1 ? cache.get(cache_key) : [...record_options, ...cache.get(cache_key)];
                this.updateControllerAttributes({ 
                    current_page: (current_page + 1),
                    record_options: updated_record_options,
                })
                return;
            }

            const { status, msg, data: response_data } = await fetch_method(params);

            if(status != "success") { return }

            const { 
                current_page: updated_current_page, 
                records, 
                total_pages: updated_total_pages 
            } = response_data;

            updated_record_options = [...record_options, ...records ];

            if (cache_enabled) { cache.set(cache_key, records); }

            this.updateControllerAttributes({ 
                current_page: updated_current_page,
                record_options: updated_record_options,
                total_pages: updated_total_pages
            })
        } 
        catch (error) {
            console.error("Failed to fetch options:", error);
        } 
        finally { this.updateControllerAttributes({ is_loading_records: false }); }
    }
}

export default SelectSearchInputUIEventhandler;