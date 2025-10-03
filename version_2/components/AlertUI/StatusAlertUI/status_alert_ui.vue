<template>
    <div v-if="props.visible" :class="props.wrapper_class_style">
        <div :id="props.alert_box_id" :class="props.alert_box_class_style">

            <button @click="event_handler.handleOnClick($event)" :class="props.close_btn_class_style">
                <span v-html="props.close_btn_icon"></span>
            </button>

            <div :class="props.status_icon_wrapper_class_style">
                <span :class="props.status_icon_class_style" v-html="props.status_icon"></span>
            </div>

            <div :class="props.status_content_wrapper_class_style">
                <p :class="props.status_content_class_style" v-html="props.status_content_messgae"></p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import StatusAlertUIProps           from "./status_alert_ui_props"
import StatusAlertUIController      from "./status_alert_ui_controller";
import StatusAlertUIEventHanlder    from "./status_alert_ui_event_handler";

const props         = defineProps(StatusAlertUIProps);
const controller    = new StatusAlertUIController(props)
const event_handler = new StatusAlertUIEventHanlder(controller);

const { state_refs, computed_refs } = controller.getComponentDefinition();
</script>