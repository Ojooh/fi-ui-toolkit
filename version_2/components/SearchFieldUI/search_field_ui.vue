<template>
    <div :class="props.wrapper_class_style">
        <label v-if="props.label_text" :for="props.input_config?.id" :class="props.label_class_style">
            {{ props.label_text }}:
            <span 
                v-if="props.input_config?.required && props.label_required_text" 
                :class="props.label_required_class_style"
            >
                {{ props.label_required_text }}
            </span>
        </label>

        <div :class="props.search_wrapper_class_style">
            <div v-if="props.btn_config?.type" :class="props.btn_wrapper_class_style">
                <ButtonUI v-bind="props.btn_config" />
            </div>

            <div v-if="props.input_config?.type" :class="props.input_wrapper_class_style">
                <InputUI  v-bind="props.input_config" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchFieldUIProps            from "./search_field_ui_props";
import SearchFieldUIController       from "./search_field_ui_controller";

const props             = defineProps(SearchFieldUIProps);
const controller        = new SearchFieldUIController(props);
const { components }    = controller.getComponentDefinition();

const { InputUI, ButtonUI } = components
</script>