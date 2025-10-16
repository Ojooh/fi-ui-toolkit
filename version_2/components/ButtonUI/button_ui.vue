
<template>
    <button 
        :id="props.id"
        :type="props.type" 
        :class="props.btn_class_style" 
        @click="event_handler?.handleOnClick?.($event)"
        v-html="props.content_text"
        :disabled="props.disabled"
    >
    </button>
</template>

<script setup lang="ts">
import ButtonUIProps         from "./button_ui_props";
import ButtonUIController    from "./button_ui_controller";

const props             = defineProps(ButtonUIProps);
const controller        = new ButtonUIController(props);
const event_handler     = controller.event_handler;
const { state_refs }    = controller.getComponentDefinition();
</script>