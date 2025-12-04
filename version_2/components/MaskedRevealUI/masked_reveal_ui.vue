
<template>
    <div :class="props.wrapper_class_style">
        <!-- Masked / Revealed Secret Key -->
        <div :class="props.secret_data_input_wrapper_class_style">
            <input 
                :type="is_revealed ? 'text' : 'password'" 
                :value="is_revealed ? props.secret_data : 'xxxxxxxxxxxxxxxxxxxxxxx'" 
                readonly 
                :class="props.secret_data_input_class_style" 
            />
        </div>

        <div v-if="props.secret_data" :class="props.action_btn_wrapper_class_style">
            <button @click="event_handler?.handleToggleReveal?.($event)" :class="props.reveal_btn_class_style">
                <!-- btn text -->
                <span :class="props.reveal_btn_text_class_style" v-if="!is_revealed && props.reveal_btn_text">{{  props.reveal_btn_text }}</span>

                <span :class="props.reveal_btn_text_class_style" v-else="is_revealed && props.hide_btn_text">{{  props.hide_btn_text }}</span>

                <!-- btn icon -->
                <span :class="props.reveal_btn_icon_class_style" v-if="!is_revealed && props.reveal_svg_btn_icon" v-html="props.reveal_svg_btn_icon"></span>

                <span :class="props.reveal_btn_icon_class_style" v-else="is_revealed && props.hide_svg_btn_icon"  v-html="props.hide_svg_btn_icon"></span>

            </button>

            <button @click="event_handler?.handleOnCopyBtnClick?.($event)" :class="props.copy_btn_class_style">
                <!-- btn text -->
                <span :class="props.copy_btn_text_class_style" v-if="!is_copied && props.copy_btn_text">{{  props.copy_btn_text }}</span>

                <span :class="props.copy_btn_text_class_style" v-if="is_copied && props.copied_btn_text">{{  props.copied_btn_text }}</span>

                <!-- btn icon -->
                <span :class="props.copy_btn_icon_class_style" v-if="!is_copied && props.copy_svg_btn_icon" v-html="props.copy_svg_btn_icon"></span>

                <span :class="props.copy_btn_icon_class_style" v-if="is_copied && props.copied_svg_btn_icon" v-html="props.copied_svg_btn_icon"></span>
            </button>
        </div>
    </div>
</template>





<script setup lang="ts">
import MaskedRevealUIProps            from "./masked_reveal_ui_props";
import MaskedRevealUIController       from "./masked_reveal_ui_controller";

const props                         = defineProps(MaskedRevealUIProps);
const controller                    = new MaskedRevealUIController(props);
const event_handler                 = controller.event_handler;
const { state_refs, components }    = controller.getComponentDefinition();
const {
    is_revealed,
    is_copied,
    remaining_seconds,
    timer
} = state_refs;
</script>