<template>
    <section :id="section_id" :class="['w-full h-full min-h-[400px] block', section_class_style]">
        <!-- large screen table -->
        <div :class="['lg:block hidden w-full relative', lg_table_wrapper_class_style]">
            <table :class="[table_class_style, 'w-full']">
                <TableHeaderUI v-bind="table_header_props" />

                <TableBodyUI v-bind="table_body_props"/>

            </table>
        </div>

    </section>
</template>

<script>
import DataTableUIController from "./controllers/data_table_ui_controller";

export default DataTableUIController

</script>