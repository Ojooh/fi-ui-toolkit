<template>
    <div :class="['w-full flex items-center overflow-hidden h-full', parent_class_style]">
        <!-- Avatar Circle -->
        <div :class="['flex items-center rounded-full overflow-hidden', avatar_circle_class_style]">
            <!-- If profile image is available -->
            <img
                v-if="img_link"
                :src="img_link"
                :alt="img_alt_text"
                :class="['w-full h-full object-cover', img_class_style]"
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
        <div v-if="right_slot" :class="['ml-2 flex items-center', right_slot_class_style]">
            <component :is="right_slot" />
        </div>
        <!-- Right side element End -->
    </div>
</template>

<script>
import MemberAvatarUIController from "./member_avatar_ui_controller";

export default MemberAvatarUIController

</script>