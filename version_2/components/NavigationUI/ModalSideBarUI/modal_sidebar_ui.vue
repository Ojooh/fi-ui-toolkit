
<template>
    <div 
        v-show="props.visible" 
        :class="props.wrapper_class_style"
        @click.self="event_handler?.handleOnClick?.($event)"
    >
        <!-- Sidebar -->
        <div :class="props.sidebar_class_style">
            <!-- nav section 1 -->
            <div :class="props.section_1_wrapper_class_style">
                <slot name="section_1" />
            </div>

            <!-- nav section 2 -->
            <div :class="props.section_2_wrapper_class_style">
                <slot name="section_2" />
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import ModalSidebarUIProps         from "./modal_sidebar_ui_props";
import ModalSidebarUIController    from "./modal_sidebar_ui_controller";

const props         = defineProps(ModalSidebarUIProps);
const controller    = new ModalSidebarUIController(props);
const event_handler = controller.event_handler;

controller.getComponentDefinition();
</script>