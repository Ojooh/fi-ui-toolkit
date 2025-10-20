

<template>
    <input 
        v-if="['text', 'password', 'email'].includes(props.type || '')"
        :type="props.type"
        :class="props.input_class_style"  
        v-model="input_value"
        :placeholder="props.placeholder"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        :readonly="props.read_only"
        @input="event_handler?.handleOnChange?.($event)"
        @keyup="event_handler?.handleOnKeyUp?.($event)"
        @keydown="event_handler?.handleOnKeyDown?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />

    <input 
        v-else-if="['checkbox'].includes(props.type || '')"
        type="checkbox" 
        :class="props.input_class_style" 
        v-model="input_value"
        :checked="state_refs.input_value === true"
        :required="props.required"
        :id="props.id"
        :name="props.id"
        @change="event_handler?.handleOnChange?.($event)"
        @click="event_handler?.handleOnClick?.($event)"
    />

    <div
        v-else-if="['otp'].includes(props.type || '')"
        :class="props.wrapper_class_style">
        <input
            v-for="(_, index) in props.length"
            :id="`${props.id}_${index}`"
            :name="`${props.id}_${index}`"
            :key="index"
            type="text"
            inputmode="numeric"
            maxlength="1"
            :class="props.input_class_style" 
            v-model="input_value[index]"
            :placeholder="props.placeholder?.[index]"
            :required="props.required"
            :readonly="props.read_only"
            @input="event_handler?.handleOTPOnInput?.($event, index)"
            @keydown="event_handler?.handleOTPOnKeyDown?.($event, index)"
            @paste="event_handler?.handleOTPOnPaste?.($event, index)"
        />
    </div>

    <div
        v-else-if="['switch'].includes(props.type || '')"
        :class="props.wrapper_class_style"
    >
        <!-- Loader -->
        <div v-if="state_refs.is_loading.value" :class="props.loader_class_style" v-html="props.loader_content"></div>

        <!-- Switch -->
        <button 
            v-else 
            :id="props.swicth_btn_id"
            :for="id" 
            role="switch"
            type="button"
            :class="[ props.switch_btn_class_style,
                input_value ? props.active_class_style : props.inactive_class_style
            ]"
            @click="event_handler?.handleSwitchToggle?.($event)"
        >

            <input 
                type="checkbox" 
                class="sr-only peer"
                v-model="input_value"
                :checked="state_refs.input_value === true"
                :required="props.required"
                :id="props.id"
                :name="props.id"
                :disabled="props.is_loading"
                @change="event_handler?.handleOnChange?.($event)"
            />

            <span :class="[knob_class_style, input_value ? 'translate-x-6' : 'translate-x-1']"></span>

            <span v-if="props.label_text" :class="props.label_text_class_style" v-html="props.label_text"></span>

        </button>
    </div>

</template>

<script setup lang="ts">
import InputUIProps         from "./input_ui_props";
import InputUIController    from "./input_ui_controller";

const props         = defineProps(InputUIProps);
const controller    = new InputUIController(props);
const event_handler = controller.event_handler;

const { state_refs }    = controller.getComponentDefinition();
const { input_value }   = state_refs;
</script>