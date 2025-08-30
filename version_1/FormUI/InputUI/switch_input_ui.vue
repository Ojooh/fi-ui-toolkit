<template>
    <div :class="[wrapper_class_style, 'w-full flex relative items-center', ]">

        <!-- Loader -->
        <div v-if="loading" :class="loader_class_style" v-html="loader_content"></div>

        <!-- Switch -->
        <button 
            v-else 
            :for="id" 
            role="switch"
            type="button"
            :class="[
                btn_class_style,
                'group inline-flex h-6 w-11 transition',
                value_obj?.input_value ? active_class_style : inactive_class_style
            ]"
            @click="util?.handleSwitchToggle?.($event)"
        >
            
            <input
                type="checkbox"
                class="sr-only peer"
                :id="id"
                :name="name || id"
                v-model="value_obj.input_value"
                :required="required"
                :disabled="loading"
            />

            <!-- Knob -->
              <span
                :class="[
                    'size-4 rounded-full transition transform',
                    value_obj?.input_value ? 'translate-x-6' : 'translate-x-1',
                    knob_class_style
                ]"
            ></span>

            <span v-if="label_text" :class="['ms-3', label_text_class_style]">
                {{ label_text}}
            </span>

        </button>

    </div>
</template>

<script>

import SwitchInputUIController from "./controllers/switch_input_ui_controller";

export default SwitchInputUIController;


</script>