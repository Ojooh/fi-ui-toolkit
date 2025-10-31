<template>
    <input
        :type="props_obj.type"
        :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
        v-model="input_value"
        :placeholder="props_obj.placeholder"
        :required="props_obj.required"
        :id="props_obj.id"
        :name="props_obj.id"
        :readonly="props_obj.read_only"
        @input="handleOnChange?.($event)"
        @keyup="handleOnKeyup?.($event)"
        @keydown="handleOnKeydown?.($event)"
        @click="handleOnClick?.($event)"
    />
</template>

<script setup lang="ts">
    const { props_obj, state_refs, handleOnChange, handleOnClick, handleOnKeyup, handleOnKeydown } = defineProps<{
        props_obj: Record<string, any>;
        state_refs: Record<string, any>;
        handleOnChange?: (e: Event) => void;
        handleOnClick?: (e: Event) => void;
        handleOnKeyup?: (e: KeyboardEvent) => void;
        handleOnKeydown?: (e: KeyboardEvent) => void;
    }>();

    const { input_value } = state_refs;
</script>
