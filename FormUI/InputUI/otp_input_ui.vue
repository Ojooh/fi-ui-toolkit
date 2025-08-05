<template>
    <div :class="['flex gap-2 justify-center', config?.container_class_style]">
        <input
        v-for="(val, index) in  config?.otp_length || 6"
            :id="`${config?.id}_${index}`"
            :key="index"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :class="['w-full py-2 px-1', config?.input_class_style]" 
            v-model="config.value[index]"
            :required="config?.required"
            :placeholder="config?.placeholder?.[index] || ''"
            @keydown="config?.handleInputKeyDownEvent?.($event, index)"
            @input="util?.handleOnInputEvent?.($event, index)"
            @keydown.backspace="util?.handleOnBackspaceEvent?.($event, index)"
            @paste="util?.handleOnPasteEvent?.($event, index)"
        />
    </div>
</template>

<script>

import OTPInputUIController from "./controllers/otp_input_ui_controller";

export default OTPInputUIController

</script>

