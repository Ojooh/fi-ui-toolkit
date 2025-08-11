<template>
    <section :id="section_id" :class="[wrapper_class_style, 'w-full']">
        <div 
            v-for="(component, index) in components"
            :class="[component.component_wrapper_class_style]"
            :key="index"
        >
            <component :is="component.component" v-bind="component.props"
        />

        </div>
        
    </section>
</template>

<script>
import SectionUIController from "./section_ui_controller";

export default SectionUIController

</script>