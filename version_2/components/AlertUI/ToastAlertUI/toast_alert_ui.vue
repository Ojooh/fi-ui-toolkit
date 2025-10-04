<template>
    <div v-if="props.status && props.message" :class="props.wrapper_class_style">
        <div @click="event_handler?.handleOnClick?.($event)" :class="props.icon_wrapper_class_style">
            <span :class="props.icon_class_style" v-html="props.status_icon"></span>
        </div>
        
        <p :class="props.message_class_style" v-html="props.message"></p>
    </div>
</template>

<script setup lang="ts">
import ToastAlertUIProps           from "./toast_alert_ui_props"
import ToastAlertUIcontroller      from "./toast_alert_ui_controller";

const props             = defineProps(ToastAlertUIProps);
const controller        = new ToastAlertUIcontroller(props)
const event_handler     = controller.event_handler;
const { state_refs }    = controller.getComponentDefinition();
</script>