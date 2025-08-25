<template>
    <button 
    :type="btn_type || 'button'" 
    :class="['w-full cursor-pointer', class_style]" 
    @click="handleClickEvent?.($event)"
    v-html="clicked && show_loader ? loader_text : btn_text"
    :disabled="disabled || false">
    </button>
</template>

<script>
import ActionBtnUIController from "./controllers/action_button_ui_controller";

export default ActionBtnUIController;

</script>