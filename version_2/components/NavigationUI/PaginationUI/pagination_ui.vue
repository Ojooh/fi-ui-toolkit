<template>
    <div :class="props.wrapper_class_style">
        <!-- Previous Button -->
        <button
        :class="[props.prev_button_class_style, selected_page <= 1 ? props.disabled_class_style : '']"
        :disabled="selected_page <= 1 || state_refs.prev_btn_clicked.value || state_refs.next_btn_clicked.value"
        @click="event_handler?.handlePrevBtnClick?.($event)"
        v-html="state_refs.prev_btn_content.value"
        ></button>

        <!-- Page Select Dropdown -->
        <select
            :class="props.select_class_style"
            :name="props.select_id"
            v-model.number="selected_page"
            @change="event_handler?.handleOnNewPageSelected?.($event)"
            :disabled="state_refs.prev_btn_clicked.value || state_refs.next_btn_clicked.value"
        >
            <option
                v-for="page in total_pages"
                :key="page"
                :value="page"
                v-html="props.render_page_content(page)"
            ></option>
        </select>

        <!-- Next Button -->
        <button
        :class="[props.next_button_class_style, selected_page >= (props.total_pages ?? 0) ? props.disabled_class_style : '']"
        :disabled="selected_page >= (props.total_pages ?? 0) || state_refs.prev_btn_clicked.value || state_refs.next_btn_clicked.value"
        @click="event_handler?.handleNextBtnClick?.($event)"
        v-html="state_refs.next_btn_content.value"
        ></button>
    </div>

</template>

<script setup lang="ts">
import PaginationUIProps         from "./pagination_ui_props";
import PaginationUIController    from "./pagination_ui_controller";

const props             = defineProps(PaginationUIProps);
const controller        = new PaginationUIController(props);
const event_handler     = controller.event_handler;
const { state_refs }    = controller.getComponentDefinition();
const { selected_page } = state_refs;
</script>