<template>
    <!-- Overlay -->
    <div v-if="props.is_open" 
        :style="{ zIndex: 100 + props.layer }"
        :class="overlay_class_style"
        @click.self="event_handler?.handleOnModalCloseClick?.($event)"
    >
        <!-- Modal box -->
        <transition :name="modal_transition_name" appear>
            <div
                v-if="is_open"
                :class="[modal_position_class_style, modal_size_class_style, props.modal_box_class_style ]"
            >
                <!-- Modal Header -->
                <div :class="props.header_wrapper_class_style">
                    <div :class="props.header_title_content_class_style">
                        <h3 :class="props.header_title_class_style" v-html="props.title_content"></h3>
                    </div>
                    <div :class="props.header_close_btn_content_class_style">
                        <button 
                            type="button" 
                            :class="props.close_btn_class_style"
                            @click="event_handler?.handleOnModalCloseClick?.($event)"
                            v-html="btn_content ?? props?.close_btn_content"
                        ></button>
                    </div>
                </div>

                <!-- ModalBody -->
                 <div :class="props.body_class_style">
                    <component 
                        v-if="body_component && body_props && Object.keys(body_props).length"  
                        :is="body_component" 
                        v-bind="body_props" 
                    />
                 </div>
            </div>
        </transition>
    </div>

</template>

<script setup lang="ts">
import ModalUIProps         from "./modal_ui_props";
import ModalUIController    from "./modal_ui_controller";

const props             = defineProps(ModalUIProps);
const controller        = new ModalUIController(props);
const event_handler     = controller.event_handler;

const { state_refs, computed_refs }    = controller.getComponentDefinition();

const { btn_content }   = state_refs;

const { 
    modal_position_class_style, 
    modal_size_class_style, 
    modal_transition_name 
} = computed_refs
</script>