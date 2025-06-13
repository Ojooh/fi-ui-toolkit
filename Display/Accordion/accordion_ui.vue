<template>
    <section :id="id" :class="['w-full p-0 h-auto flex flex-col items-center justify-center my-2', accordion_class_style]">
        <!-- acordion head -->
        <div 
        @click="util?.toggleBody($event)"
        :id="accordion_head_id" 
        :class="[`accordion-${group_id}-head`,'cursor-pointer w-full items-center flex md:flex-row flex-col md:justify-between justify-center', accordion_head_class_style]">

            <span :class="['font-bold uppercase', accordion_head_title_class_style]" v-html="accordion_head_title_content"></span>

            <div :class="['w-12 h-12 p-4 items-center justify-center flex', accordion_head_btn_class_style]">
                <span class="w-6 h-6 font-black" v-html="accordion_head_btn_icon"></span>
            </div>
        </div>
        <!-- accordion head -->

        <!-- accordion body -->
        <div :id="accordion_body_id" :class="[`accordion-${id}-body`, 'w-full h-auto transition-all ease-in-out duration-1000 delay-500 hidden', accordion_body_class_style]">
            <slot>
                <!-- Default content if no slot is provided
                <p>{{ body_content }}</p> -->
            </slot>
        </div>
        <!-- accordion body -->

    </section>
</template>

<script>

import AccordionUIController from "./accordion_ui_controller";

export default AccordionUIController

</script>