<template>
    <th :id="props.id" :class="props.wrapper_class_style">
        <span v-html="props.label_content"></span>

        <div v-if="props.sortable" class="flex flex-col ml-1">
            <span
                :class="[props.icon_class_style, { 'opacity-100': props.sort_direction === 'asc', 'opacity-30': props.sort_direction !== 'asc' }]"
                @click="event_handler?.handleOnSort($event, { sortable_value: 'asc' })"
            >
                ▲
            </span>
        <span
            :class="[props.icon_class_style, { 'opacity-100': props.sort_direction === 'desc', 'opacity-30': props.sort_direction !== 'desc' }]"
            @click="event_handler?.handleOnSort($event, { sortable_value: 'asc' })"
        >
            ▼
        </span>
        </div>
    </th>
</template>

<script setup lang="ts">
import SortableHeaderCellUIProps        from "./sortable_header_cell_ui_props";
import SortableHeaderCellUIController   from "./sortable_header_cell_ui_controller";

const props         = defineProps(SortableHeaderCellUIProps);
const controller    = new SortableHeaderCellUIController(props);
const event_handler = controller.event_handler;

controller.getComponentDefinition();
</script>
