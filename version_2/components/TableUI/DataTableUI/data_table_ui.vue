<template>
    <section :id="props.table_id" :class="props.wrapper_class_style">

        <ListLoaderUI v-if="props.is_loading" :number_of_bars="props.number_of_loading_bars" />

        <div v-else-if="!is_loading" :class="props.lg_table_wrapper_class_style">
            <table :class="props.table_class_style">

                <TableHeaderUI v-bind="props.header_props" />

                <TableBodyUI v-bind="props.body_props">
                    <template #actions="{ record, record_index }">
                        <slot name="actions" :record="record" :record_index="record_index" />
                    </template>
                </TableBodyUI>
            </table>
        </div>
    </section>
</template>

<script setup lang="ts">
import DataTableUIController    from "./data_table_ui_controller";
import DataTableUIProps         from "./data_table_ui_props";


const props             = defineProps(DataTableUIProps);
const controller        = new DataTableUIController(props);
const { components }    = controller.getComponentDefinition();

const { TableHeaderUI, TableBodyUI, ListLoaderUI } = components
</script>
