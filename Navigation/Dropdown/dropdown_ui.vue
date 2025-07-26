<template>
    <div @click="util?.toggleDropdownMenu?.($event)" :class="['relative', parent_class_style]">
        <button 
        :id="btn_id" 
        :class="['', btn_class_style]" 
        type="button"
        v-html="btn_content"
        >
        </button>

        <!-- Dropdown menu -->
        <div 
        :id="menu_id" 
        :class="['hidden divide-y divide-gray-100', menu_parent_class_style]">
            <ul 
            :class="['py-2', menu_class_style]" 
            :aria-labelledby="btn_id"
            
            >
                <li 
                    v-for="(menu, index) in menu_list"
                    :key="index"
                    :class="[menu_list_class_style]" 
                >
                    <NavLinkUI v-bind="menu" />
                </li>
                
            </ul>
        </div>

    </div> 


</template>

<script>
import DropdownUIController from "./dropdown_ui_controller";

export default DropdownUIController

</script>