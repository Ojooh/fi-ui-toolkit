<template>
    <button 
    :type="config?.btn_type || 'button'" 
    :class="['w-full cursor-pointer', config?.class_style]" 
    @click="config?.handleClickEvent?.($event)"
    v-html="config?.clicked && config?.show_loader ? config?.loader_text : config?.btn_text"
    :disabled="config?.disabled || false">
    </button>
</template>

<script>
import BaseButtonUIController from "./controllers/base_button_ui_controller";

export default BaseButtonUIController("action_btn_type").getUIComponentDefinition();

</script>