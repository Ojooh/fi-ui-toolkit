<template>
    <div :class="['w-full flex items-center h-full', parent_class_style]">
        <!-- Avatar circle -->
        <div :class="['flex items-center rounded-full overflow-hidden', avatar_circle_class_style]">
            <!-- If profile image is available -->
            <img
                v-if="img_link"
                :src="img_link"
                :alt="img_alt_text"
                :class="['w-full h-auto object-cover', img_class_style]"
            />

            <!-- If no image, show initials -->
            <span 
                v-else 
                :class="['uppercase', initials_class_style]">
                {{ initials }}
            </span>
        </div>
        <!-- Avatar Circle End -->

        <!-- Right side element -->
        <div v-if="right_slot" :class="['flex items-center', right_slot_class_style]">
            <component :is="right_slot" v-bind="right_slot_props" />
        </div>
        <!-- Right side element End -->
    </div>
</template>

<script>
import MemberAvatarUIController from "./member_avatar_ui_controller";

export default MemberAvatarUIController

</script>