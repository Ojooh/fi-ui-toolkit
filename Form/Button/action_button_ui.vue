<template>
    <button 
    :type="config?.btn_type || 'button'" 
    :class="['w-full cursor-pointer', config?.class_style]" 
    @click="config?.handleInputClickEvent?.($event)"
    v-html="config?.btn_text">
    </button>
</template>

<script>

import ActionButtonUIController from "./controllers/action_button_ui_controller";

export default ActionButtonUIController

</script>