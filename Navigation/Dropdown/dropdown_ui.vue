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
                    <NavLinkUI
                        :wrapper_class_style="menu?.wrapper_class_style"
                        :icon_parent_class_style="menu?.icon_parent_class_style"
                        :icon_img_class_style="menu?.icon_img_class_style"
                        :svg_icon_class_style="menu?.svg_icon_class_style"
                        :content_class_style="menu?.content_class_style"
                        :link ="menu?.link"
                        :icon_img_link ="menu?.icon_img_link"
                        :icon_img_alt_text="menu?.icon_img_alt_text"
                        :svg_icon ="menu?.svg_icon"
                        :html_content="menu?.html_content"
                        :on_click="menu?.on_click"
                    />
                </li>
                
            </ul>
        </div>

    </div> 


</template>

<script>
import DropdownUIController from "./dropdown_ui_controller";

export default DropdownUIController

</script>