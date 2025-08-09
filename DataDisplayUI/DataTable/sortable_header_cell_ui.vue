<template>
    <div :class="['flex items-center gap-1 cursor-pointer select-none', wrapper_class_style]" @click="toggleSort?.($event, id, sort_order_value)">
        <span :class="title_class_style" v-html="title_text"></span>
        <div class="flex flex-col ml-1">
            <!-- Up icon -->
            <span v-html="caret_up_svg_icon" :class="['w-3 h-3', sort_order_value?.toLowerCase() === 'asc' ? active_icon_class_style : inactive_icon_class_style]"></span>


            <!-- Down icon -->
             <span v-html="caret_down_svg_icon" :class="['w-3 h-3', sort_order_value?.toLowerCase() === 'desc' ? active_icon_class_style : inactive_icon_class_style]"></span>
        </div>
  </div>
</template>

<script>
import SortableHeaderCellUIController from "./controllers/sortable_header_cell_ui_controller";

export default SortableHeaderCellUIController

</script>
