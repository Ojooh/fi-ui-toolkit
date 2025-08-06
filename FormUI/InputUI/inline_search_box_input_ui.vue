<template>
    <div :class="[config?.wrapper_class_style, 'relative w-full']">
        <div class="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3">
            <span :class="[config?.search_btn_class_style]" v-html="search_btn_icon"></span>
        </div>
        <input 
            type="text" 
            :class="['w-full p-2.5 pl-10 ', config?.input_class_style]" 
            v-model="config.value"
            :placeholder="config.placeholder"
            :required="config?.required"
            :id="config.id"
            :name="config?.name || config?.id"
            @keyup="config?.handleInputKeyUpEvent?.($event)"
            @keydown="config?.handleInputKeyDownEvent?.($event)"
            @click="config?.handleInputClickEvent?.($event)"
        />
    </div>

</template>


<script>

import SearchInputUIController from "./controllers/search_input_ui_controller";

export default SearchInputUIController;

</script>