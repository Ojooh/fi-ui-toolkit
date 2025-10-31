<template>
    <select
        :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
        v-model="input_value"
        :id="props_obj.id"
        :name="props_obj.id"
        :disabled="props_obj.read_only"
        @change="handleOnChange?.($event)"
        @keyup="handleOnKeyup?.($event)"
        @keydown="handleOnKeydown?.($event)"
        @click="handleOnClick?.($event)"
    >
        <option v-if="props_obj.placeholder" disabled value="">{{ props_obj.placeholder }}</option>
        <option v-for="option in props_obj.options" :key="option.value" :value="option.value">
            {{ option.label_text }}
        </option>
    </select>
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
