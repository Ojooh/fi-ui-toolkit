<template>
    <div class="w-full flex items-center space-x-2">

        <img
            v-if="image_src"
            :src="image_src" :alt="img_alt" :class="['object-contain', image_class]"
        />

        <span v-if="text" :class="['text-base', text_class]">
            {{ text }}
        </span>

    </div>
</template>

<script>
import ImageTextUIController from "./image_text_ui_controller";

export default ImageTextUIController

</script>