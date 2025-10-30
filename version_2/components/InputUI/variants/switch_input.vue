<template>
    
    <div :class="props_obj.wrapper_class_style">
        <div v-if="state_refs.is_loading.value" :class="props_obj.loader_class_style" v-html="props_obj.loader_content"></div>

        <button
            v-else
            :id="props_obj.switch_btn_id"
            role="switch"
            type="button"
            :class="[props_obj.switch_btn_class_style, input_value ? props_obj.active_class_style : props_obj.inactive_class_style]"
            @click="onSwitchToggle?.($event)"
        >
            <input
                type="checkbox"
                class="sr-only peer"
                v-model="input_value"
                :checked="input_value === true"
                :id="props_obj.id"
                :name="props_obj.id"
                :disabled="props_obj.is_loading"
                @change="onChange?.($event)"
            />
            <span :class="[props_obj.knob_class_style, input_value ? 'translate-x-6' : 'translate-x-1']"></span>
            <span v-if="props_obj.label_text" :class="props_obj.label_text_class_style" v-html="props_obj.label_text"></span>
        </button>
    </div>
</template>

<script setup lang="ts">
    const { props_obj, state_refs, onSwitchToggle, onChange, onClick, onKeyup, onKeydown } = defineProps<{
        props_obj: Record<string, any>;
        state_refs: Record<string, any>;
        onSwitchToggle?: (e: MouseEvent) => void;
        onChange?: (e: Event) => void;
        onClick?: (e: Event) => void;
        onKeyup?: (e: KeyboardEvent) => void;
        onKeydown?: (e: KeyboardEvent) => void;
    }>();

    const { input_value } = state_refs;
</script>
