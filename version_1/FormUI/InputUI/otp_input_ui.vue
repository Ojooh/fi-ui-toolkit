<template>
    <div :class="['flex gap-2 justify-center', container_class_style]">
        <input
       v-for="(_, index) in value_proxy"
            :id="`${id}_${index}`"
            :key="index"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :class="['w-full py-2 px-1', input_class_style]" 
            v-model="value_obj.input_value[index]"
            :required="required"
            :placeholder="placeholder?.[index] || ''"
            @keydown="util?.handleOTPInputKeyDownEvent?.($event, index)"
            @input="util?.handleOTPOnInputEvent?.($event, index)"
            @paste="util?.handleOTPOnPasteEvent?.($event, index)"
        />
    </div>
</template>

<script>

import OTPInputUIController from "./controllers/otp_input_ui_controller";

export default OTPInputUIController;


</script>

