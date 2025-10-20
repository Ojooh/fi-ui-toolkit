<template>
    <thead :class="props.wrapper_class_style">
        <tr :class="props.header_row_class_style">
            <th v-if="props.sn_text"  :class="props.header_cell_class_style">
                <template v-if="props.some_selected || props.all_selected">
                    <input
                        type="checkbox"
                        :checked="props.all_selected"
                        :indeterminate="props.some_selected && !props.all_selected"
                        @change="event_handler?.handleOnChange?.($event)"
                        :class="props.selected_checkbox_class_style"
                    />
                    </template>
                <template v-else>
                    <span v-html="props.sn_text"></span>
                </template>
            </th>

            <!-- <th v-if="props.sn_text" :class="props.header_cell_class_style" v-html="props.sn_text"></th> -->

            <template v-for="(col, index) in props.columns" :key="index">
                <SortableHeaderCellUI v-if="col.sortable" v-bind="col" />
                <th :class="props.header_cell_class_style" v-else v-html="col.label_content"></th>
            </template>

            <th v-if="props.actions_text" :class="props.header_cell_class_style" v-html="props.actions_text"></th>
        </tr>
    </thead>
</template>

<script setup lang="ts">
import TableHeaderUIProps       from "./table_header_ui_props";
import TableHeaderUIController  from "./table_header_ui_controller";

const props                     = defineProps(TableHeaderUIProps);
const controller                = new TableHeaderUIController(props);
const event_handler             = controller.event_handler;
const { components }            = controller.getComponentDefinition();
const { SortableHeaderCellUI }  = components;
</script>
