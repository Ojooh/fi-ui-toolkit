import LoggerUtil from "../../Logger/logger_util";

class PaginationUIUtil {
    constructor (vue_instance, content_manager) {
        this.name               = "pagination_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }
    
    // Method to handle Prev btn click
    handlePrevBtnClick = (e) => {
        const { proxy }         = this.vue_instance;
        const { $data, $props } = proxy;
        let { selected_page } = $data
        const { current_page, handleOnPrevBtnClicked } = $props;
        

        if (current_page > 1 && handleOnPrevBtnClicked) {
            selected_page =  (current_page - 1);
            handleOnPrevBtnClicked?.(selected_page);
        }
    }

    // Method to handle  Next btn click
    handleNextBtnClick = (e) => {
        const { proxy }         = this.vue_instance;
        const { $data, $props } = proxy;
        let { selected_page }   = $data

        const { current_page, total_pages, handleOnNextBtnClicked } = $props;

        if (current_page < total_pages && handleOnNextBtnClicked) {
            selected_page =  (current_page + 1)
            handleOnNextBtnClicked?.(selected_page);
        }
    }

    // Method to handle on new page selected
    handleOnNewPageSelected = () => {
        const { current_page, handleOnNewPageSelected } = this.vue_instance.proxy.$props;
        const { selected_page } = this.vue_instance.proxy.$data;

        if (selected_page !== current_page) {
            handleOnNewPageSelected?.(selected_page);
        }
    }
}

export default PaginationUIUtil;