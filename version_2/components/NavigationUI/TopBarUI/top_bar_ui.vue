
<template>
    <nav role="navigation" :class="props.wrapper_class_style">
        <!-- nav section 1 -->
        <div :class="props.section_1_wrapper_class_style">
            <slot name="section_1" />
        </div>

        <!-- nav section 2 -->
        <div :class="props.section_2_wrapper_class_style">
            <slot name="section_2" />
        </div>

        <!-- nav section 3 -->
        <div :class="props.section_3_wrapper_class_style">
            <slot name="section_3" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import TopBarUIProps         from "./top_bar_ui_props";
import TopBarUIController    from "./top_bar_ui_controller";

const props         = defineProps(TopBarUIProps);
const controller    = new TopBarUIController(props);

const { state_refs }    = controller.getComponentDefinition();
</script>