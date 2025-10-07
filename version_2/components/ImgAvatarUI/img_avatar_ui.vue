<template>
    <div :id="props.id" :class="props.wrapper_class_style" @click="event_handler?.handleOnClick?.($event)">
        <!-- Avatar circle -->
        <div :class="props.avatar_circle_class_style">
            <img v-if="props.img_src" :src="props.img_src" :alt="props.img_alt_text" :class="props.img_class_style" />

            <span v-else-if="props.initials"  :class="props.initials_class_style">
                {{ props.initials_class_style }}
            </span>
        </div>
        <!-- Avatar Circle End -->

        <!-- Right side element -->
        <div v-if="props.right_slot_content" :class="props.right_slot_class_style" v-html="props.right_slot_content"></div>

        <div v-else :class="props.right_slot_class_style">
            <slot name="section_1" />
        </div>
        <!-- Right side element End -->
    </div>
</template>

<script setup lang="ts">
import ImgAvatarUIProps         from "./img_avatar_ui_props";
import ImgAvatarUIController    from "./img_avatar_ui_controller";

const props         = defineProps(ImgAvatarUIProps);
const controller    = new ImgAvatarUIController(props);
const event_handler = controller.event_handler

controller.getComponentDefinition();
</script>