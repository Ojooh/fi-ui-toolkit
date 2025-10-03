
<template>
    <div :class="props.wrapper_class_style">
        <p :class="props.text_class_style">
            © {{ props.year }} {{ props.powered_by_text }}  {{  props.author_text }}
        </p>
    </div>
</template>


<script setup lang="ts">
import CopyRightUIProps      from "./copy_right_ui_props";
import CopyRightUIController from "./copy_right_ui_controller";

const props         = defineProps(CopyRightUIProps);
const controller    = new CopyRightUIController(props);

const { state_refs, computed_refs } = controller.getComponentDefinition();
</script>