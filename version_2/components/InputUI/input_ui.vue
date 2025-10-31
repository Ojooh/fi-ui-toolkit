

<template>
   <component
        :is="controller.getInputComponent(props.type)"
        :props_obj="props" 
        :state_refs="state_refs"
        :handleOnChange="event_handler?.handleOnChange.bind(event_handler)"
        :handleOnClick="event_handler?.handleOnClick.bind(event_handler)"
        :handleOnKeyup="event_handler?.handleOnKeyUp.bind(event_handler)"
        :handleOnKeydown="event_handler?.handleOnKeyDown.bind(event_handler)"
        :handleOnSwitchToggle="event_handler?.handleSwitchToggle.bind(event_handler)"
        :handleOnOTPInput="event_handler?.handleOTPOnInput.bind(event_handler)"
        :handleOnOTPKeydown="event_handler?.handleOTPOnKeyDown.bind(event_handler)"
        :handleOnOTPPaste="event_handler?.handleOTPOnPaste.bind(event_handler)"
    />
</template>

<script setup lang="ts">
import InputUIProps         from "./input_ui_props";
import InputUIController    from "./input_ui_controller";

const props             = defineProps(InputUIProps);
const controller        = new InputUIController(props);
const event_handler     = controller.event_handler;
const { state_refs }    = controller.getComponentDefinition();
const {input_value} = state_refs
</script>