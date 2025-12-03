<template>
    <VueTelInput
        :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
        :value="input_value"
        :placeholder="props_obj.placeholder"
        :required="props_obj.required"
        :id="props_obj.id"
        :name="props_obj.id"
        :readonly="props_obj.read_only"
        @input="setPhoneNumber"
        @keyup="handleOnKeyup?.($event)"
        @keydown="handleOnKeydown?.($event)"
        @click="handleOnClick?.($event)"
    ></VueTelInput>
</template>

<script setup lang="ts">
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
import { PhoneNumberResult  } from "../../../types/input_ui_type";

const { props_obj, state_refs, componentss, handleOnChange, handleOnClick, handleOnKeyup, handleOnKeydown } = defineProps<{
    props_obj: Record<string, any>;
    state_refs: Record<string, any>;
    componentss: Record<string, any>;
    handleOnChange?: (e: Event) => void;
    handleOnClick?: (e: Event) => void;
    handleOnKeyup?: (e: KeyboardEvent) => void;
    handleOnKeydown?: (e: KeyboardEvent) => void;
}>();

const setPhoneNumber = (raw_phone_number_input: string, phone_obj: PhoneNumberResult): void => {
    if(!phone_obj?.number) { return }

    input_value.value = phone_obj?.number;
    const event = { target: { id: props_obj.id, value: phone_obj.number }, detail: phone_obj }

    console.log({ value: phone_obj?.number })

    handleOnChange?.(event as any);
}

const { input_value } = state_refs;

</script>
