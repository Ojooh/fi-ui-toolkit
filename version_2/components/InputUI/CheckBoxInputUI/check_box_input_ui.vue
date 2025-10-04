<template>
    <input 
        type="checkbox" 
        :class="props.input_class_style" 
        v-model="state_refs.input_value"
        :checked="state_refs.input_value === true"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        @change="event_handler?.handleOnChange?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />
</template>

<script setup lang="ts">
import CheckBoxInputUiProps     from "./check_box_input_ui_props";
import CheckBoxUIController     from "./check_box_input_ui_controller";

const props         = defineProps(CheckBoxInputUiProps);
const controller    = new CheckBoxUIController(props);
const event_handler = controller.event_handler;

const { state_refs } = controller.getComponentDefinition();
</script>