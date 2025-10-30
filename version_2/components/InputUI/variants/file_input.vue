<template>
    <input
        type="file"
        :accept="props_obj.accept"
        :multiple="props_obj.multiple"
        :class="[props_obj.input_class_style]"
        :id="props_obj.id"
        :name="props_obj.id"
        @change="onChange?.($event)"
    />
</template>

<script setup lang="ts">
    const { props_obj, state_refs, onChange, onClick } = defineProps<{
        props_obj: Record<string, any>;
        state_refs: Record<string, any>;
        onChange?: (e: Event) => void;
        onClick?: (e: Event) => void;
        onKeyup?: (e: KeyboardEvent) => void;
        onKeydown?: (e: KeyboardEvent) => void;
    }>();

    const { input_value } = state_refs;
</script>
