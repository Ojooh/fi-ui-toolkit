<template>
    <section :id="section_id" :class="['w-full h-full min-h-[400px] block', section_class_style]">
        <!-- loader -->
        <XBarLoaderUI v-if="is_loading" :number_of_bars="12" />

        <!-- large screen table -->
        <div v-else-if="!is_loading && records.length" :class="['w-full relative', lg_table_wrapper_class_style]">
            <div class="w-full relative lg:block hidden">
                <table :class="[table_class_style, 'w-full']">

                    <TableHeaderUI v-bind="header_props" :has_action_menu="has_action_menu" :select_mode="select_mode" />

                    <TableBodyUI 
                        :records="records"
                        :has_action_menu="has_action_menu" 
                        :select_mode="select_mode" 
                        v-bind="body_props" 
                    />

                </table>
            </div>
        </div>

        <HeaderTextUI  v-else text_class_style="w-full flex items-center justify-center py-4 my-4 font-bold"  :text_content="no_data_content" />

    </section>
</template>

<script>

import DataTableUIController from "./controllers/data_table_ui_controller";

export default DataTableUIController;

</script>