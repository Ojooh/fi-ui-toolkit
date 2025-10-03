<template>
    <div role="status" :class="props.wrapper_class_style">
        <div v-for="(_, index) in props.number_of_bars" :key="index" :class="props.bar_class_style">
        </div>
    </div>
</template>

<script setup lang="ts">
import ListLoaderUIProps        from "./list_loader_ui_props";
import ListLoaderUIController   from "./list_loader_ui_controller";

const props             = defineProps(ListLoaderUIProps);

const {
    state_refs,
    computed_refs
} = new ListLoaderUIController(props).getComponentDefinition();
</script>