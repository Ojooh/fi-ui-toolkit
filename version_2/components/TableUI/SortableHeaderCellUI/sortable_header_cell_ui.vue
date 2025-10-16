<template>
    <th :id="props.field_key" :class="props.wrapper_class_style">
        <div :class="props.content_wrapper_class_style">
            <span v-html="props.label_content"></span>

            <div v-if="props.sortable" class="flex flex-col ml-1">
                <span
                    :class="[props.icon_class_style, 'hover:opacity-100', { 'opacity-100': props.sort_direction === 'asc', 'opacity-30': props.sort_direction !== 'asc' }]"
                    @click="event_handler?.handleOnSort($event, { sortable_value: `${props.field_key}-asc` })"
                    v-html="SVGIcons.trinagular_caret_up_svg_icon"
                >
                </span>
                <span
                    :class="[props.icon_class_style, 'hover:opacity-100', { 'opacity-100': props.sort_direction === 'desc', 'opacity-30': props.sort_direction !== 'desc' }]"
                    @click="event_handler?.handleOnSort($event, { sortable_value:  `${props.field_key}-desc`  })"
                    v-html="SVGIcons.trinagular_caret_down_svg_icon"
                >
                </span>
            </div>
        </div>
    </th>
</template>

<script setup lang="ts">
import SVGIcons                         from "../../../resources/svg_icon_resource";
import SortableHeaderCellUIProps        from "./sortable_header_cell_ui_props";
import SortableHeaderCellUIController   from "./sortable_header_cell_ui_controller";

const props         = defineProps(SortableHeaderCellUIProps);
const controller    = new SortableHeaderCellUIController(props);
const event_handler = controller.event_handler;

controller.getComponentDefinition();
</script>
