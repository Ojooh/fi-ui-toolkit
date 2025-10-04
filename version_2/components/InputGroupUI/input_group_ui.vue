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
        <!-- input -->
        <CheckBoxInputUI v-if="props.input_config?.type === 'checkbox'" v-bind="props.input_config" />

        <EmailInputUI v-else-if="props.input_config?.type === 'email'" v-bind="props.input_config" />

        <PasswordInputUI v-else-if="props.input_config?.type === 'password'" v-bind="props.input_config" />

        <TextInputUI v-else-if="props.input_config?.type === 'text'" v-bind="props.input_config" />

    </div>
</template>

<script setup lang="ts">
import InputGroupUIProps            from "./input_group_ui_props";
import InputGroupUIController       from "./input_group_ui_controller";

const props         = defineProps(InputGroupUIProps);
const controller    = new InputGroupUIController(props);

const { components } = controller.getComponentDefinition();
const {
    CheckBoxInputUI,
    EmailInputUI,
    PasswordInputUI,
    TextInputUI
} = components
</script>