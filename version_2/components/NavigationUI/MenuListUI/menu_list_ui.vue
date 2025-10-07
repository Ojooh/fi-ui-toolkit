
<template>
    <!-- Dropdown menu -->
    <div :id="props.id" :class="props.wrapper_class_style">
        <ul :class="props.list_class_style"  :aria-labelledby="props.parent_id">
            <li 
                v-for="(menu, index) in props.menu_list"
                :key="index"
                :class="props.list_item_class_style" 
            >
                <NavLinkUI v-bind="menu" />
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
const { NavLinkUI }     = components
</script>