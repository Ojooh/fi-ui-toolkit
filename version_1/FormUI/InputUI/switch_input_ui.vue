<template>
    <div :class="[config?.wrapper_class_style, 'w-full flex relative items-center', ]">

        <!-- Loader -->
        <div v-if="config?.is_loading" :class="config?.loader_class_style" v-html="config?.loader_content"></div>

        <!-- Switch -->
        <button 
            v-else 
            :for="config?.id" 
            role="switch"
            type="button"
            :class="[
                config?.btn_class_style,
                'group inline-flex h-6 w-11 transition',
                config?.value ? config?.active_class_style : config?.inactive_class_style
            ]"
            @click="config?.handleSwitchToggle?.($event, this)"
        >
            <input
                type="checkbox"
                class="sr-only peer"
                :id="config?.id"
                :name="config?.name || config?.id"
                v-model="config.value"
                :required="config?.required"
                :disabled="config?.is_loading"
            />

            <!-- Knob -->
              <span
                :class="[
                    'size-4 rounded-full transition transform',
                    config?.value ? 'translate-x-6' : 'translate-x-1',
                    config?.knob_class_style
                ]"
            ></span>

            <span v-if="config?.label_text" :class="['ms-3', config?.label_text_class_style]">
                {{ config?.label_text}}
            </span>

        </button>

    </div>
</template>

<script>

import BaseInputUIController from "./controllers/base_input_ui_controller";

export default new BaseInputUIController("switch_input_type").getUIComponentDefinition();


</script>