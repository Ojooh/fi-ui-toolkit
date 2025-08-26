<template>
    <textarea 
        :class="['w-full py-2 px-1', input_class_style]"
        :id="id"
        :name="name || id"
        :rows="rows"
        v-model="value_proxy"
        :placeholder="placeholder"
        :required="required"
        :readonly="read_only"
        @keyup="handleInputKeyUpEvent?.($event)"
        @keydown="handleInputKeyDownEvent?.($event)"
        @click="handleInputClickEvent?.($event)"
    >
    </textarea>
</template>

<script>

import TextAreaInputUIController from "./controllers/text_area_input_ui_controller";

export default TextAreaInputUIController;

</script>