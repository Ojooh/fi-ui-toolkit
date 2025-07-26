<template>
    <div :class="[wrapper_class_style, 'w-full flex items-center space-x-2']">

        <img
            v-if="image_src"
            :src="image_src" :alt="img_alt" :class="['object-contain', img_class_style]"
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