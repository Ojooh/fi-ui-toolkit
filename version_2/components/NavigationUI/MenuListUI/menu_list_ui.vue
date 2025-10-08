
<template>
    <!-- Dropdown menu -->
    <div :id="props.id" :class="props.wrapper_class_style">
        <ul 
            v-if="props.menu_list && props.menu_list.length" 
            :class="props.list_class_style"  
            :aria-labelledby="props?.parent_id"
        >
            <li 
                v-for="(menu, index) in props.menu_list"
                :key="index"
                :class="props.list_item_class_style" 
            >
                <NavLinkUI v-bind="menu" />

                <!-- Render sub menu list recursively if present -->
                <MenuListUI
                    v-if="menu?.sub_menu_list && menu?.sub_menu_list?.length > 0"
                    :id="`${menu.id}_sub_menu_list`"
                    :parent_id="menu.id"
                    :menu_list="menu.sub_menu_list"
                    :wrapper_class_style="props.wrapper_class_style"
                    :list_class_style="props.list_class_style"
                    :list_item_class_style="props.list_item_class_style"
                />
            </li>
            
        </ul>
    </div>
</template>

<script setup lang="ts">
import MenuListUIProps         from "./menu_list_ui_props";
import MenuListUIController    from "./menu_list_ui_controller";

const props             = defineProps(MenuListUIProps);
const controller        = new MenuListUIController(props);
const { components }    = controller.getComponentDefinition();

const { NavLinkUI, MenuListUI }     = components;

</script>