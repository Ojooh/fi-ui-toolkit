<template>
    <div :class="['flex items-center space-x-2', wrapper_class_style]">

        <!-- Previous Button -->
        <button
        :class="[prev_button_class_style, current_page <= 1 ? disabled_class_style : '']"
        :disabled="current_page <= 1"
        @click="util?.handlePrevBtnClick?.($event)"
        v-html="prev_btn_content"
        ></button>

        <!-- Page Select Dropdown -->
        <select
            :class="[select_class_style]"
            name="pagination_page_options"
            v-model.number="selected_page"
            @change="util?.handleOnNewPageSelected?.($event)"
        >
            <option
                v-for="page in total_pages"
                :key="page"
                :value="page"
                v-html="renderPageContent(page)"
            ></option>
        </select>

        <!-- Next Button -->
        <button
        :class="[next_button_class_style, current_page >= total_pages ? disabled_class_style : '']"
        :disabled="current_page >= total_pages"
        @click="util?.handleNextBtnClick?.($event)"
        v-html="next_btn_content"
        ></button>

    </div>
</template>

<script>
import PaginationUIController from "./pagination_ui_controller";

export default PaginationUIController

</script>