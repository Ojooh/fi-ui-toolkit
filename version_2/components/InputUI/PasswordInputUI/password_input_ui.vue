<template>
    <input 
        type="password" 
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
import PasswordInputUIProps         from "./password_input_ui_props";
import PasswordInputUIController    from "./password_input_ui_controller";

const props         = defineProps(PasswordInputUIProps);
const controller    = new PasswordInputUIController(props);
const event_handler = controller.event_handler;

const { state_refs } = controller.getComponentDefinition();
</script>