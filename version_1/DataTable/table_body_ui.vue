<template>
    <tbody :class="['w-full', table_body_class_style]">
        <tr 
            v-for="(record, record_index) in records" 
            :key="record_index" 
            :id="`table-row-${record_index}`" 
            :class="[table_body_row_class_style]"
        >
            <!-- row counter -->
            <td v-if="!select_mode"  :class="[table_body_cell_class_style]">{{ record_index + 1 }}</td>

            <td v-else :class="[table_body_cell_class_style]">
                <div class="w-10 h-10 flex items-center justify-center">
                    <CheckboxInputUI v-bind="select_checkbox_props(record, record_index)" />
                </div>
            </td>

            <td
                v-for="(renderer, col_index) in column_renderers"
                :key="col_index"
                :class="[table_body_cell_class_style]"
            >
                <!-- Render plain string -->
                <span v-if="renderer.content === 'plain'">{{ record[renderer.field] }}</span>

                <!-- Render plain string -->
                <span v-if="renderer.content === 'formatted'" v-html="renderer?.formatter?.(record[renderer.field])"></span>

                <!-- Render dynamic component -->
                <component 
                    v-else :is="renderer.content"
                    v-bind="typeof renderer.props === 'function' ? renderer.props(record) : (renderer.props || {})"
                />
            </td>

             <td v-if="has_action_menu"  :class="[table_body_cell_class_style]">
                <DropdownUI v-bind="get_dropdown_ui_props(record, record_index)" />
             </td>

        </tr>
    </tbody>
</template>

<script>

import BaseDataTableUIController from "./controllers/base_data_table_ui_controller";

export default new BaseDataTableUIController("table_body_config").getUIComponentDefinition();

</script>
