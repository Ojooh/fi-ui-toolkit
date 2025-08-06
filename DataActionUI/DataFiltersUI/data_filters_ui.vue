<template>
    <div :class="[wrapper_class_style, 'w-full flex']">
        <component
            v-for="(filter, index) in filters"
            :key="index"
            :is="filter.component"
            v-bind="filter.props"
        />
    </div>
</template>

<script>
import DataFiltersUIController from "./data_filters_ui_controller";

export default DataFiltersUIController

</script>