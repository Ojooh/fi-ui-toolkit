<template>
    <div :class="['flex items-center w-full', class_style]">
        <button 
            @click="handleOnClickEvent?.($event)" 
            type="button"
            :class="['inline-flex items-center p-2 rounded-lg', button_class_style]"
            v-html="btn_icon || hamburger_svg_icon"
        >
        </button>

        <!-- logo link -->
        <RouterLink 
            v-if="logo_link && logo_link[0] === '/'"
            :to="logo_link" 
            :class="['flex', logo_class_style]"
            v-html="logo_content">
        </RouterLink>

        <!-- logo text -->
        <div 
            v-else-if="logo_content"
            :class="['flex', logo_class_style]"
            v-html="logo_content">
        </div>
    </div>
</template>


<script>
import HamburgerButtonUIController from "./controllers/hamburger_button_ui_controller";

export default HamburgerButtonUIController

</script>