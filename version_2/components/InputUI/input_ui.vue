

<template>
   <component
        :is="controller.getInputComponent(props.type)"
        :props_obj="props" 
        :state_refs="state_refs"
        :on-change="event_handler?.handleOnChange.bind(event_handler)"
        :on-click="event_handler?.handleOnClick.bind(event_handler)"
        :on-keyup="event_handler?.handleOnKeyUp.bind(event_handler)"
        :on-keydown="event_handler?.handleOnKeyDown.bind(event_handler)"
        :on-switch-toggle="event_handler?.handleSwitchToggle.bind(event_handler)"
        :on-otp-input="event_handler?.handleOTPOnInput.bind(event_handler)"
        :on-otp-keydown="event_handler?.handleOTPOnKeyDown.bind(event_handler)"
        :on-otp-paste="event_handler?.handleOTPOnPaste.bind(event_handler)"
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