<template>
    <div :class="props_obj.wrapper_class_style">
        <input
            v-for="(_, index) in props_obj.length"
            :key="index"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :id="`${props_obj.id}_${index}`"
            :name="`${props_obj.id}_${index}`"
            :class="[
                props_obj.input_class_style,
                props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : ''
            ]"
            v-model="input_value[index]"
            :placeholder="props_obj.placeholder?.[index]"
            :readonly="props_obj.read_only"
            @input="handleOnOTPInput?.($event, index)"
            @keydown="handleOnOTPKeydown?.($event, index)"
            @paste="handleOnOTPPaste?.($event, index)"
        />
    </div>
</template>

<script setup lang="ts">

const { props_obj, state_refs, handleOnOTPInput, handleOnOTPKeydown, handleOnOTPPaste } = defineProps<{
    props_obj: Record<string, any>;
    state_refs: Record<string, any>;
    handleOnOTPInput?: (e: Event, index: number) => void;
    handleOnOTPKeydown?: (e: KeyboardEvent, index: number) => void;
    handleOnOTPPaste?: (e: ClipboardEvent, index: number) => void;
}>();

const { input_value } = state_refs;
</script>
