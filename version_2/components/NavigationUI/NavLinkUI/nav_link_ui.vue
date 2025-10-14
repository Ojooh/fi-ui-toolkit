<template>
    <component
        :is="computed_refs.component_type.value"
        :to="computed_refs.route_link.value"
        :href="computed_refs.anchor_link.value"
        :target="computed_refs.anchor_target.value"
        :class="[props.wrapper_class_style, computed_refs?.is_active_computed.value ? props.active_menu_class_style : '']"
        @click="event_handler?.handleOnClick?.($event)"
    >
        <div v-if="props.img_src || props.icon" :class="props.icon_img_wrapper_class_style">
            <!-- image icon -->
            <img v-if="props.img_src " :src="props.img_src " :alt="props.img_alt_text" :class="props.icon_img_class_style" />

            <!-- SVG Icon -->
            <span v-else-if="props.icon" v-html="props.icon" :class="props.icon_img_class_style"></span>
        </div>

        <!-- Right content -->
        <div v-if="props.content" :class="props.content_class_style" v-html="props.content"></div>

    </component>
</template>


<script setup lang="ts">
import NavLinkUIProps         from "./nav_link_ui_props";
import NavLinkUIController    from "./nav_link_ui_controller";

const props         = defineProps(NavLinkUIProps);
const controller    = new NavLinkUIController(props);
const event_handler = controller.event_handler

const { computed_refs }    = controller.getComponentDefinition();
</script>