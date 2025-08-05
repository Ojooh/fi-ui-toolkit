<template>
    <div 
        v-if="visible" 
        :class="['fixed inset-0 flex items-start justify-end overflow-hidden', status_overlay_class_style ]">

            <div ref="alertBox" :class="['relative top-6 right-6 max-w-sm w-full flex items-stretch rounded-lg shadow-lg animate-slide-in', bg_class ]">
                
                <!-- content -->

                <!-- Close Button -->
                <button @click="util?.handleOnClickCloseAlertButton" :class="['absolute -top-3 -left-3 w-8 h-8 flex items-center text-center rounded-full shadow-md cursor-pointer', bg_class, text_class_style]">
                    <span v-html="close_btn_icon"></span>
                </button>

                <!-- icon content -->
                <div class="flex items-center justify-center w-2/12  h-full p-2">
                    <span :class="['w-full font-bold', text_class_style]" v-html="status_icon"></span>
                </div>
                <!-- icon content end -->

                <!-- message content -->
                <div class="flex-1 w-10/12 h-full p-4">
                    <p :class="['text-sm font-medium', text_class_style]" v-html="alert_message"></p>
                </div>
                <!-- message content -->

                <!-- content end -->
            </div>
    </div>
</template>

<script>
import StatusAlertUIController from "./status_alert_ui_controller";

export default StatusAlertUIController

</script>