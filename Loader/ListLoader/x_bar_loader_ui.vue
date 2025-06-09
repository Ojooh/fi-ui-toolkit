
<template>
    <div role="status" class="w-full flex flex-col items-center justify-center animate-pulse py-4 px-0">
        <div v-for="(_, index) in number_of_bars" class="w-full h-12 my-4 bg-gray-200 rounded-lg dark:bg-gray-700 shadow"></div>
    </div>
</template>

<script>
import XBarLoaderUIController from "./x_bar_loader_ui_controller";

export default XBarLoaderUIController

</script>