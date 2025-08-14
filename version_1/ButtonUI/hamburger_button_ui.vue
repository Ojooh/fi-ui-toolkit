<template>
    <div :class="['flex items-center w-full', config?.hamburger_class_style]">
        <button 
        @click="config?.handleOnClickEvent?.($event)" 
        type="button"
        :class="['inline-flex items-center p-2 rounded-lg', config?.hamburger_button_class_style]"
        v-html="config?.btn_icon || hamburger_svg_icon"
        >
        </button>

        <!-- logo link -->
        <RouterLink 
        v-if="config?.logo_link && config?.logo_link[0] === '/'"
        :to="config?.logo_link" 
        :class="['flex', config?.logo_class_style]"
        v-html="config?.logo_content">
        </RouterLink>

        <!-- logo text -->
        <div 
        v-else-if="config?.logo_content"
        :class="['flex', config?.logo_class_style]"
        v-html="config?.logo_content">
        </div>
    </div>
</template>


<script>
import ActionButtonUIController from "./controllers/action_button_ui_controller";

export default ActionButtonUIController

</script>