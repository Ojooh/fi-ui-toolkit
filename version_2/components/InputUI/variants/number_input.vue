<template>
    <input
        type="number"
        :min="props_obj.min"
        :max="props_obj.max"
        :step="props_obj.step"
        :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
        v-model.number="input_value"
        :placeholder="props_obj.placeholder"
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
