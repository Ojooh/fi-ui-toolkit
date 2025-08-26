<template>
    <input 
        type="checkbox" 
        :class="['w-full py-2 px-1', input_class_style]" 
        v-model="value_obj.input_value"
        :checked="is_checked"
        :required="required"
        :id="id"
        :name="name || id"
        @click="handleInputClickEvent?.($event)"
    />
</template>

<script>

import CheckboxInputUIController from "./controllers/checkbox_input_ui_controller";

export default CheckboxInputUIController;


</script>

