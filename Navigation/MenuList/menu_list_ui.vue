<template>
    <div :class="['w-full', wrapper_class_style]">
        <template v-for="(item, index) in menus" :key="index">
            <!-- Top-Level NavLink -->
            <NavLinkUI v-bind="item" />

            <!-- If children exist, render second level -->
            <div v-if="item?.children && item?.children?.length" :class="[second_level_wrapper_class_style]">
                <NavLinkUI 
                    v-for="(child, cIndex) in item.children"
                    :key="`${index}-child-${cIndex}`"
                    v-bind="child"
                />
            </div>
        </template>
  </div>
</template>

<script>
import MenuListUIController from "./menu_list_ui_controller";

export default MenuListUIController

</script>