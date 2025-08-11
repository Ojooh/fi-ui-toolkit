<template>
    <section :id="section_id" :class="[wrapper_class_style, 'w-full']">
        <component
            v-for="(component, index) in components"
            :key="index"
            :is="component.component"
            v-bind="component.props"
        />
    </section>
</template>

<script>
import SectionUIController from "./section_ui_controller";

export default SectionUIController

</script>