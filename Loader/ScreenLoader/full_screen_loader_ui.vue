<template>
    <div 
        v-if="visible" 
        :class="['fixed inset-0 flex items-center justify-center overflow-hidden', loader_overlay_class_style ]">
            <div :class="['flex flex-col items-center space-y-4 animate-fade-in', loader_content_class_style]">

                <div :class="[loader_content_symbol_class_style]">
                  <!-- image loader -->
                  <img 
                    v-if="loader_content_symbol_object?.type === 'img'" 
                    :src="loader_content_symbol_object?.src" 
                    :class="loader_content_symbol_object?.class_style" 
                    :alt="loader_content_symbol_object?.alt_text" 
                    />
                </div>

                <p v-if="loader_text" :class="[loader_content_text_class_style]">{{ loader_text }}</p>
            </div>
    </div>
</template>

<script>
import "../../Resources/global_styles.css";
import FullScreenLoaderController from "./full_screen_loader_controller";

export default FullScreenLoaderController

</script>
