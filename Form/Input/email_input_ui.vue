<template>
    <input 
        type="email" 
        :class="['w-full py-2 px-1', config?.input_class_style]" 
        v-model="config.value"
        :placeholder="config.placeholder"
        :required="config?.required"
        :id="config.id"
        :name="config?.name || config?.id"
        @keyup="config?.handleInputKeyUpEvent?.($event)"
        @keydown="config?.handleInputKeyDownEvent?.($event)"
        @click="config?.handleInputClickEvent?.($event)"
    />
</template>

<script>

import EmailInputUIController from "./controllers/email_input_ui_controller";

export default EmailInputUIController

</script>

