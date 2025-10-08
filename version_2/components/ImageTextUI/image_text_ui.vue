<template>
    <div :class="props.wrapper_class_style">
        <div :class="props.img_wrapper_class_style">
            <img 
                v-if="props.image_src"
                :src="props.image_src" 
                :alt="props.img_alt_text" 
                :class="props.img_class_style"
            />
        </div>
        <div :class="props.text_class_style" v-html="props.text_content"></div>
    </div>
</template>

<script setup lang="ts">
import ImageTextUIProps         from "./image_text_ui_props";
import ImageTextUIController    from "./image_text_ui_controller";

const props             = defineProps(ImageTextUIProps);
const controller        = new ImageTextUIController(props);

controller.getComponentDefinition();

</script>