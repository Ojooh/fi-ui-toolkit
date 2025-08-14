<template>
    <div :class="[input_group_class_style, 'w-full my-4']">
        <label 
            v-if="label_config?.label_text" 
            :for="label_config?.for" 
            :class="label_config?.class_style"
        >
            {{ label_config?.label_text }}:
            <span 
                v-if="label_config?.required && label_config?.required_text " 
                :class="['italic font-medium', label_config?.required_class_style]"
            >
                {{  label_config?.required_text   }}
            </span>
        </label>
        <component 
            :is="util?.getInputComponent(input_config?.input_type)" 
            :config="input_config"
        />
    </div>
</template>

<script>

import InputGroupUIController from "./input_group_ui_controller";

export default InputGroupUIController

</script>