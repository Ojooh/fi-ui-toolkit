<template>
    <!-- Overlay -->
    <div
        v-show="show"
        :class="[overlay_class_style, 'fixed inset-0 z-[90]']"
        @click.self="util?.handleCloseSidebar?.($event)"
    >
        <!-- Sidebar -->
        <div :class="[ sidebar_class_style, 'fixed top-0 h-screen transition-all duration-[2000s] ease-in-out', show_class_style, position_class_style,]">
            
            <!-- Section 1 -->
            <div :class="[section_1_class_style, 'h-[15%] flex items-center justify-center']">
                <component v-if="section_1_component" :is="section_1_component" v-bind="section_1_props" />
                <slot name="section_1" v-else />
            </div>

            <!-- Scrollable Section 2 -->
            <div :class="[section_2_class_style, 'h-[85%] overflow-y-auto']">
                <component v-if="section_2_component" :is="section_2_component" v-bind="section_2_props" />
                <slot name="section_2" v-else />
            </div>
        </div>
    </div>

</template>


<script>
import ModalSidebarUIController from "./modal_sidebar_ui_controller";

export default ModalSidebarUIController

</script>
