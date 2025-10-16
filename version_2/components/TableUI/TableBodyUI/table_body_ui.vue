<template>
    <tbody :class="props.wrapper_class_style">
        <tr 
            v-if="!props.records.length"
            :class="props.body_row_class_style"
        >
            <td
                :class="props.body_cell_class_style" 
                :colspan="props.columns.length + (props.sn_text ? 1 : 0) + (props.actions_text ? 1 : 0)"
                v-html="props.empty_text"
            >  
            </td>
        </tr>

        <tr 
            v-for="(record, index) in props.records" 
            :key="index"
            :class="props.body_row_class_style"
        >
                <td v-if="props.sn_text" :class="props.body_cell_class_style" >{{ index + 1 }}</td>

                <td
                    v-for="(col, col_index) in props.columns"
                    :key="col_index"
                    :class="props.body_cell_class_style" 
                >
                    <!-- Render plain string -->
                    <div v-if="col.content_type === 'plain'" :class="col.col_class_style">{{ record[col.field_key] }}</div>

                    <!-- Render plain string -->
                    <div v-else-if="col.content_type === 'formatted'" :class="col.col_class_style" v-html="col?.formatter?.(record[col.field_key])"></div>

                    <component 
                        v-else :is="col.component"
                        v-bind="controller.computeComponentRecordProps(col, record)"
                    />
                
                </td>

                <td v-if="props.actions_text" :class="props.body_cell_class_style" >
                    <slot name="actions" :record="record" />
                </td>
        </tr>
    </tbody>
</template>

<script setup lang="ts">
import TableBodyUIProps         from "./table_body_ui_props";
import TableBodyUIController    from "./table_body_ui_controller";

const props         = defineProps(TableBodyUIProps);
const controller    = new TableBodyUIController(props);

controller.getComponentDefinition();
</script>
