<template>
    <textarea 
        :class="['w-full py-2 px-1', config?.input_class_style]"
        :id="config?.id"
        :name="config?.name || config?.id"
        :rows="config?.rows"
        v-model="config.value"
        :placeholder="config?.placeholder"
        :required="config?.required"
        @keyup="config?.handleInputKeyUpEvent?.($event)"
        @keydown="config?.handleInputKeyDownEvent?.($event)"
        @click="config?.handleInputClickEvent?.($event)"
    >
    </textarea>
</template>

<script>

import BaseInputUIController from "./controllers/base_input_ui_controller";

export default BaseInputUIController("text_area_input_type").getUIComponentDefinition();

</script>