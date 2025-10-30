<template>
    <select
        :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
        v-model="input_value"
        :id="props_obj.id"
        :name="props_obj.id"
        :disabled="props_obj.read_only"
        @change="onChange?.($event)"
        @keyup="onKeyup?.($event)"
        @keydown="onKeydown?.($event)"
        @click="onClick?.($event)"
    >
        <option v-if="props_obj.placeholder" disabled value="">{{ props_obj.placeholder }}</option>
        <option v-for="option in props_obj.options" :key="option.value" :value="option.value">
            {{ option.label_text }}
        </option>
    </select>
</template>

<script setup lang="ts">
    const { props_obj, state_refs, onChange, onClick, onKeyup, onKeydown } = defineProps<{
        props_obj: Record<string, any>;
        state_refs: Record<string, any>;
        onChange?: (e: Event) => void;
        onClick?: (e: Event) => void;
        onKeyup?: (e: KeyboardEvent) => void;
        onKeydown?: (e: KeyboardEvent) => void;
    }>();

    const { input_value } = state_refs;
</script>
