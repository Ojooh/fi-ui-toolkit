<template>
    <input 
        type="email" 
        :class="['w-full py-2 px-1', input_class_style]" 
        v-model="value_proxy"
        :placeholder="placeholder"
        :required="required"
        :id="id"
        :name="name || id"
        :readonly="read_only"
        @keyup="handleInputKeyUpEvent?.($event)"
        @keydown="handleInputKeyDownEvent?.($event)"
        @click="handleInputClickEvent?.($event)"
    />
</template>

<script>
import EmailInputUIController from "./controllers/email_input_ui_controller";

export default EmailInputUIController

</script>

