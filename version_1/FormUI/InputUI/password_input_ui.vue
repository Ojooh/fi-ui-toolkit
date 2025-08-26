<template>
    <input 
        type="password" 
        :class="['w-full py-2 px-1', input_class_style]" 
        v-model="value_obj.input_value"
        :placeholder="placeholder"
        :required="required"
        :id="id"
        :name="name || id"
        @keyup="handleInputKeyUpEvent?.($event)"
        @keydown="handleInputKeyDownEvent?.($event)"
        @click="handleInputClickEvent?.($event)"
    />
</template>

<script>

import PasswordInputUIController from "./controllers/password_input_ui_controller";

export default PasswordInputUIController;

</script>

