<template>
    <nav
        :class="['w-screen px-4 flex flex-wrap items-center justify-between relative h-full', top_bar_class_style]"
        :style="{ height: config?.height + 'px', backgroundColor: config.bg_color  }"
    >
        <!-- nav section 1 -->
        <div class="md:w-3/12 w-6/12 flex items-center overflow-hidde h-full">
            <component v-if="section_1_component" :is="section_1_component" v-bind="section_1_props" />
            <slot name="section_1" v-else />
        </div>

        <!-- nav section 2 -->
        <div class="md:w-6/12 w-full flex items-center overflow-hidden md:order-1 order-2 h-full">
            <component v-if="section_2_component" :is="section_2_component" v-bind="section_2_props" />
            <slot name="section_2" v-else />
        </div>

        <div class="md:w-3/12 w-6/12 flex items-center  md:order-2 order-1 h-full ">
            <component v-if="section_3_component" :is="section_3_component" v-bind="section_3_props" />
            <slot name="section_3" v-else />
        </div>
    </nav>
</template>

<script>
import TopBarUIController from "./top_bar_ui_controller";

export default TopBarUIController

</script>