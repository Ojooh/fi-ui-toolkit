
<template>
    <nav :class="props.wrapper_class_style" aria-label="breadcrumb">
        <ol :class="props.list_class_style">
        <template v-for="(menu, index) in props.menu_list" :key="index">
            <li :class="props.list_item_class_style">
                <NavLinkUI v-bind="menu" />
            </li>

            <li 
                v-if="index !== props.menu_list.length - 1" 
                aria-hidden="true" 
                :class="props.divider_class_style"
                v-html="props.divider_content"
            ></li>
        </template>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import BreadCrumbUIProps         from "./bread_crumb_ui_props";
import BreadCrumbUIController    from "./bread_crumb_ui_controller";

const props             = defineProps(BreadCrumbUIProps);
const controller        = new BreadCrumbUIController(props);
const { components }    = controller.getComponentDefinition();
const { NavLinkUI }     = components;

</script>