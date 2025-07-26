<template>
  <div :class="['w-full text-center py-4', class_style_text]">
    <p>© {{ year }} {{ powered_by_text }}  {{  author_text }}</p>
  </div>
</template>

<script>
import FooterCopyRightUIController from "./footer_copy_right_ui_controller";

export default FooterCopyRightUIController

</script>