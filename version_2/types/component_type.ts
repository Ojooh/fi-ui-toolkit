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
    // protected getUIComponents(): Record<string, Component>;
    // getUIComputedData(): Record<string, () => any>;
    // getUIStateData(): Record<string, any>;
    // getUIWatchers(): Record<string, (newVal: any, oldVal: any) => void>;

    // handleOnCreatedLogic(): Promise<void>;
    // handleOnMountedLogic(): Promise<void>;
    // handleBeforeUnmountedLogic(): Promise<void>;
}