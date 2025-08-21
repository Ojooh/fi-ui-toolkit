<template>
    <!-- Overlay -->
    <div 
        v-if="is_open" 
        :style="{ zIndex: 100 + layer }"
        :class="['fixed inset-0 flex justify-center items-center',overlay_class_style,]"
        @click.self="util?.handleCloseModal?.($event)"
    >
        <!-- Modal box -->
        <transition :name="modal_transition_name" appear>
            <div
                v-if="is_open"
                :class="['overflow-hidden relative', modal_position_class_style, modal_size_class_style, modal_box_class ]"
            >
                <!-- Header -->
                <div :class="['flex', header_class_style]">
                    <component v-if="header_component"  :is="header_component" v-bind="header_props" />

                    <div v-else class="flex justify-between items-center w-full">
                        <h3 :class="[header_props?.title_class_style]" v-html="header_props?.title_content"></h3>

                        <button 
                            type="button" 
                            :class="[header_props?.close_btn_class_style]"
                            @click="util?.handleCloseModal?.($event)"
                            v-html="header_props?.close_btn_content"
                        ></button>
                    </div>
                </div>

                <!-- Body -->
                <div :class="['flex-1', body_class_style]">
                    <component v-if="body_component"  :is="body_component" v-bind="body_props" />
                </div>

            </div>
        </transition>
    </div>
</template>

<script>
import BaseModalUIController from "./base_modal_ui_controller";

export default BaseModalUIController

</script>