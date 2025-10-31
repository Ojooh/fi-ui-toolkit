<template>
    <input
        type="file"
        :accept="props_obj.accept"
        :multiple="props_obj.multiple"
        :class="[props_obj.input_class_style]"
        :id="props_obj.id"
        :name="props_obj.id"
        @change="handleOnChange?.($event)"
    />
</template>

<script setup lang="ts">
    const { props_obj, state_refs, handleOnChange, handleOnClick } = defineProps<{
        props_obj: Record<string, any>;
        state_refs: Record<string, any>;
        handleOnChange?: (e: Event) => void;
        handleOnClick?: (e: Event) => void;
        handleOnKeyup?: (e: KeyboardEvent) => void;
        handleOnKeydown?: (e: KeyboardEvent) => void;
    }>();

    const { input_value } = state_refs;
</script>
