<template>
    <span :class="[text_class_style]" v-html="text_content"></span>
</template>

<script>
import BaseTextUIController from "./controllers/base_text_ui_controller";

export default new BaseTextUIController("base_text_type").getUIComponentDefinition();

</script>