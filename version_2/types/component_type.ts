import { Component } from "vue";

export interface ComponentDefinitionInterface {
    props: Record<string, any>;
    components: Record<string, any>;
    state_refs: Record<string, any>;
    computed_refs: Record<string, any>;
}

export interface BaseControllerInterface {
    readonly name: string;
    component_name: string;

    props: Record<string, any>;
    components: Record<string, Component>;
    computed_refs: Record<string, any>;
    state_refs: Record<string, any>;

    // Methods
    getComponentDefinition(): ComponentDefinitionInterface;
}

export interface BaseEventHandlerInterface {
    name: string;
    component_name: string;
    [method: string]: any;
}