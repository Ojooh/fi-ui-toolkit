

<template>
    <input 
        v-if="['text', 'password', 'email'].includes(props.type || '')"
        :class="props.input_class_style"  
        v-model="input_value"
        :placeholder="props.placeholder"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        :readonly="props.read_only"
        @input="event_handler?.handleOnChange?.($event)"
        @keyup="event_handler?.handleOnKeyUp?.($event)"
        @keydown="event_handler?.handleOnKeyDown?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />

    <input 
        v-else-if="['checkbox'].includes(props.type || '')"
        type="checkbox" 
        :class="props.input_class_style" 
        v-model="input_value"
        :checked="state_refs.input_value === true"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        @change="event_handler?.handleOnChange?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />
</template>

<script setup lang="ts">
import InputUIProps         from "./input_ui_props";
import InputUIController    from "./input_ui_controller";

const props         = defineProps(InputUIProps);
const controller    = new InputUIController(props);
const event_handler = controller.event_handler;

const { state_refs }    = controller.getComponentDefinition();
const { input_value }   = state_refs;
</script>