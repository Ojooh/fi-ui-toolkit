<template>
    <component
        :is="component_type"
        :to="is_router_link ? link : undefined"
        :href="is_anchor ? link : undefined"
        :target="is_anchor ? '_blank' : undefined"
        :class="['flex items-center cursor-pointer', wrapper_class_style]"
        @click="util?.handleOnClickEvent?.($event)"
    >
        <div v-if="icon_img_link || svg_icon" :class="['flex items-center justify-center overflow-hidden', icon_parent_class_style]">
            <!-- image icon -->
            <img v-if="icon_img_link" :src="icon_img_link" :alt="icon_img_alt_text" :class="['w-full h-auto object-cover', icon_img_class_style]"/>

            <!-- SVG Icon -->
            <span v-else-if="svg_icon" v-html="svg_icon" :class="svg_icon_class_style"></span>
        </div>

        <!-- Right content -->
        <div v-if="html_content" :class="['flex items-center', content_class_style]" v-html="html_content"></div>
    </component>
</template>

<script>
import NavLinkUIController from "./nav_link_ui_controller";

export default NavLinkUIController

</script>