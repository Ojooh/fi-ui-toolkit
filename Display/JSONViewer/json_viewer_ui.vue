<template>
    <div class="pl-4 font-mono text-sm">
        <!-- opening brace -->
        <span class="text-gray-600 font-bold">{</span>

        <!-- iterate over data content -->
        <div v-for="(value, key, index) in json_data" :key="key">
            <div>
                <span @click="util?.toggle(key)" class="cursor-pointer">
                    <template v-if="util?.isObject(value)">
                        <span class="text-blue-600 pl-2 pr-2">
                            {{ collapsed[key] ? "▶" : "▼" }}
                        </span>
                        <span class="text-gray-700 font-bold">"{{ key }}"</span>:
                    </template>
                    <template v-else>
                        <span class="pl-8 text-gray-700 font-bold">"{{ key }}"</span>:
                        <span class="text-green-700 font-bold"> {{ util?.formatValue(value) }} </span>
                    </template>
                </span>

                <!-- Nested Viewer -->
                <div v-if="util?.isObject(value) && !collapsed[key]" class="pl-4 border-l border-gray-300 ml-2 mt-1">
                    <!-- <span class="text-gray-600 font-bold">{</span> -->
                        <JSONViewerUI :json_data="value" />
                    <!-- <span class="text-gray-600 font-bold">}</span> -->
                </div>

                <!-- Show collapsed closing brace inline -->
                <div v-if="util?.isObject(value) && collapsed[key]" class="inline text-gray-600 font-bold"> {…} </div>
            </div>
        </div>

        <!-- closing brace -->
        <span class="text-gray-600 font-bold">}</span>
    </div>
</template>

<script>

import JSONViewerUIController from "./json_viewer_ui_controller";

export default JSONViewerUIController

</script>