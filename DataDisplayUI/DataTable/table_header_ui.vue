<template>
    <thead :class="['w-full', table_head_class_style]">
        <tr :class="[table_header_row_class_style]">
            <th scope="col"  :class="[table_head_cell_class_style]" v-html="index_col_text"></th>

            <th
                v-for="(col_header, col_header_index) in column_headers" :key="col_header_index" 
                scope="col"  
                :class="[table_head_cell_class_style]"
            >
                <!-- Render string directly -->
                <span v-if="typeof col_header?.content === 'string'" v-html="col_header?.content"></span>

                <!-- Render a Vue component -->
                <component v-else :is="col_header?.content" v-bind="col_header?.props || {}" />
            </th>

            <th v-if="has_action_menu" scope="col"  :class="[table_head_cell_class_style]" v-html="action_col_text"></th>

        </tr>
        
    </thead>
</template>

<script>
import TableHeaderUIController from "./controllers/table_header_ui_controller";

export default TableHeaderUIController

</script>
