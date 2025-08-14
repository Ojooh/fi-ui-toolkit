<template>
    <input 
        type="checkbox" 
        :class="['w-full py-2 px-1', config?.input_class_style]" 
        v-model="config.value"
        :checked="config?.is_checked"
        :required="config?.required"
        :id="config.id"
        :name="config?.name || config?.id"
        @click="config?.handleInputClickEvent?.($event)"
    />
</template>

<script>

import BaseInputUIController from "./controllers/base_input_ui_controller";

export default new BaseInputUIController("checkbox_input_type").getUIComponentDefinition();


</script>

