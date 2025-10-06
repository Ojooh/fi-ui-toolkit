

<template>
    <input 
        v-if="['text', 'password', 'email'].includes(props.type || '')"
        :type="props.type"
        :class="props.input_class_style"  
        v-model="input_value"
        :placeholder="props.placeholder"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        :readonly="props.read_only"
        @input="event_handler?.handleOnChange?.($event)"
        @keyup="event_handler?.handleOnKeyUp?.($event)"
        @keydown="event_handler?.handleOnKeyDown?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />

    <input 
        v-else-if="['checkbox'].includes(props.type || '')"
        type="checkbox" 
        :class="props.input_class_style" 
        v-model="input_value"
        :checked="state_refs.input_value === true"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        @change="event_handler?.handleOnChange?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />

    <div
        v-else-if="['otp'].includes(props.type || '')"
        :class="props.wrapper_class_style">
        <input
            v-for="(_, index) in props.length"
            :id="`${props.id}_${index}`"
            :name="`${props.id}_${index}`"
            :key="index"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :class="props.input_class_style" 
            v-model="input_value[index]"
            :placeholder="props.placeholder?.[index]"
            :required="props.required"
            :readonly="props.read_only"
            @input="event_handler?.handleOTPOnInput?.($event, index)"
            @keydown="event_handler?.handleOTPOnKeyDown?.($event, index)"
            @paste="event_handler?.handleOTPOnPaste?.($event, index)"
        />
    </div>
</template>

<script setup lang="ts">
import InputUIProps         from "./input_ui_props";
import InputUIController    from "./input_ui_controller";

const props         = defineProps(InputUIProps);
const controller    = new InputUIController(props);
const event_handler = controller.event_handler;

const { state_refs }    = controller.getComponentDefinition();
const { input_value }   = state_refs;
</script>