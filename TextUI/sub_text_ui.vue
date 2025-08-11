<template>
    <span :class="[text_class_style]" v-html="text_content"></span>
</template>

<script>
import TextUIController from "./controllers/text_ui_controller";

export default TextUIController

</script>