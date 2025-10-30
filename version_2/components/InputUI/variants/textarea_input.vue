<template>
    <textarea
        :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
        v-model="input_value"
        :placeholder="props_obj.placeholder"
        :required="props_obj.required"
        :id="props_obj.id"
        :name="props_obj.id"
        :readonly="props_obj.read_only"
        :rows="props_obj.rows"
        @input="onChange?.($event)"
        @keyup="onKeyup?.($event)"
        @keydown="onKeydown?.($event)"
        @click="onClick?.($event)"
    ></textarea>
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
