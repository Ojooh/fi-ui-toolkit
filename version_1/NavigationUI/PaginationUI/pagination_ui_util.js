import { def } from "@vue/shared";

class PaginationUIUtil {
    constructor (vue_instance, content_manager) {
        this.name               = "pagination_ui_util"
        this.vue_instance       = vue_instance;
        this.content_manager    = content_manager;
        this.logger             = new LoggerUtil({ prefix: this.name?.toUpperCase() });
    }
    
    // Method to handle Prev btn click
    handlePrevBtnClick = (e) => {
        const { current_page, handleOnPrevBtnClicked } = this.vue_instance.props;

        if (current_page > 1 && handleOnPrevBtnClicked) {
            handleOnPrevBtnClicked?.(current_page - 1);
        }
    }

    // Method to handle  Next btn click
    handleNextBtnClick = (e) => {
        const { current_page, total_pages, handleOnNextBtnClicked } = this.vue_instance.props;

        if (current_page < total_pages&& handleOnNextBtnClicked) {
            handleOnNextBtnClicked?.(current_page + 1);
        }
    }

    // Method to handle on new page selected
    handleSelectChange = () => {
        const { current_page, handleOnNewPageSelected } = this.vue_instance.props;
        const { selected_page } = this.vue_instance.data;

        if (selected_page !== current_page) {
            handleOnNewPageSelected?.(selected_page);
        }
    }
}

export default PaginationUIUtil;