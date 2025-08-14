<template>
    <nav :class="[ 'w-full flex', wrapper_class_style, alignment_class_style ]" aria-label="breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-full">
            <template v-for="(item, index) in items" :key="index">
                <li class="inline-flex items-center">
                    <template v-if="item.link && index !== items.length - 1">
                        <RouterLink :to="item.link" :class="[ link_class_style]" v-html="item?.text"></RouterLink>
                    </template>
                    <template v-else>
                        <div :class="[ text_class_style]" v-html="item?.text"></div>
                    </template>
                </li>

                <!-- Divider (not shown after last item) -->
                <li v-if="index !== items.length - 1" aria-hidden="true" :class="[divider_class_style]"> {{ divider }}</li>
            </template>
        </ol>
    </nav>
</template>

<script>
import BreadcrumbUIController from "./breadcrumb_ui_controller";

export default BreadcrumbUIController

</script>