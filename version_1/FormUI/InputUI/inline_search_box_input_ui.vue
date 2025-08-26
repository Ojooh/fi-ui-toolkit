<template>
    <div :class="[wrapper_class_style, 'relative w-full']">
        <div class="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3">
            <span :class="[search_btn_class_style]" v-html="search_btn_icon"></span>
        </div>
        <input 
            type="text" 
            :class="['w-full p-2.5 pl-10 ', input_class_style]" 
            v-model="value_obj.input_value"
            :placeholder="placeholder"
            :required="required"
            :id="id"
            :name="name || id"
            @keyup="handleInputKeyUpEvent?.($event)"
            @keydown="handleInputKeyDownEvent?.($event)"
            @click="handleInputClickEvent?.($event)"
        />
    </div>

</template>


<script>

import InlineSearchBoxInputUIController from "./controllers/inline_search_box_input_ui_controller";

export default InlineSearchBoxInputUIController;

</script>