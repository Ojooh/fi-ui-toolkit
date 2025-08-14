<template>
    <h1 :class="[text_class_style]" v-html="text_content"></h1>
</template>

<script>
import BaseTextUIController from "./controllers/base_text_ui_controller";

export default BaseTextUIController("base_text_type").getUIComponentDefinition();

</script>