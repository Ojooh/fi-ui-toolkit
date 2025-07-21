<template>
    <div v-if="message" :class="['w-full flex items-stretch justify-start border-l-4', border_class_tyle, toast_class_style]">
        <div :class="['flex items-center justify-center w-1/12 p-1', icon_class_style]">
            <span class="flex items-center justify-center w-6 h-6" v-html="status_icon"></span>
        </div>
        
        <p :class="['flex-1 w-11/12 h-full p-2', text_class_style]" v-html="message"></p>
    </div>
</template>

<script>
import FeedbackToastController from "./feedback_toast_ui_controller";

export default FeedbackToastController

</script>