<template>
    <div :class="[props_obj.wrapper_class_style, 'relative']">
        <!-- Search input -->
        <div class="relative w-full">
            <input
                type="text"
                :id="props_obj.id"
                :placeholder="props_obj.placeholder"
                v-model="search_selected_text"
                :readonly="props_obj.read_only"
                :class="[props_obj.input_class_style, props_obj.read_only ? 'bg-gray-100 cursor-not-allowed' : '']"
                @focus="event_handler?.toggleDropdown(true)"
                @input="event_handler?.onSearchInput?.($event)"
            />
            <span 
                :class="props_obj.caret_icon_class" 
                v-html="props_obj.caret_content" 
                @click="event_handler?.toggleDropdown(true)"
            ></span>
        </div>

        <!-- Dropdown -->
        <div
            v-if="is_open"
            :class="props_obj.dropdown_wrapper_class_style"
            @scroll="event_handler?.handleScroll?.($event)"
        >
            <!-- Options -->
            <ul 
                v-if="record_options.length"
                :class="props_obj.options_wrapper_class_style"
            >
                <li
                    v-for="(option, index) in record_options"
                    :key="index"
                    @click="handleOptionSelected?.($event, option)"
                    :class="props_obj.option_class_style"
                >
                    <span 
                        :class="props_obj.option_content_class_style"
                        v-html="props_obj?.render_option_label(option)"
                    ></span>
                </li>
            </ul>

            <!-- No Results -->
            <div 
                v-else-if="!record_options.length && !is_loading_records" 
                :class="props_obj.options_wrapper_class_style"
                v-html="props_obj?.no_options_content"
            >
            </div>

            <!-- Loader -->
            <div 
                v-if="is_loading_records" 
                :class="props_obj.options_wrapper_class_style"
                v-html="props_obj?.loader_content"
            >
            </div>

        </div>
    

    </div>
</template>

<script setup lang="ts">
const { props_obj, state_refs, onChange, onClick, onKeyup, onKeydown } = defineProps<{
    props_obj: Record<string, any>;
    state_refs: Record<string, any>;
    onChange?: (e: Event) => void;
    onClick?: (e: Event) => void;
    onKeyup?: (e: KeyboardEvent) => void;
    onKeydown?: (e: KeyboardEvent) => void;
}>();

const { input_value }   = state_refs;
    
import SelectSearchInputUIController    from "../custom_controller_logic/select_search_input_ui_controller";

const controller                = new SelectSearchInputUIController(props_obj);
const event_handler             = controller.event_handler;
const handleOptionSelected      = (e: Event, option: Record<string, any>) => { 
    const computed_value    = event_handler?.onOptionSelected?.(e, option);
    input_value.value       = computed_value;
}

const {  state_refs: custom_state_refs } = controller;

const {
    search_selected_text,
    is_open,
    record_options,
    is_loading_records
} = custom_state_refs
</script>