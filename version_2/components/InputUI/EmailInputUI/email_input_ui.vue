<template>
    <input 
        type="email" 
        :class="props.input_class_style"  
        v-model="state_refs.input_value"
        :placeholder="props.placeholder"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        :readonly="props.read_only"
        @change="event_handler?.handleOnChange?.($event)"
        @keyup="event_handler?.handleOnKeyUp?.($event)"
        @keydown="event_handler?.handleOnKeyDown?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />
</template>

<script setup lang="ts">
import EmailInputProps          from "./email_input_ui_props";
import EmailInputUIController   from "./email_input_ui_controller";

const props         = defineProps(EmailInputProps);
const controller    = new EmailInputUIController(props);
const event_handler = controller.event_handler;

const { state_refs } = controller.getComponentDefinition();
</script>