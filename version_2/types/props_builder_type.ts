
export type InputValueType = string | number | boolean | null;

export interface InputGroupClassStyleInterface {
    wrapper_class_style?: string, 
    label_class_style?: string,
    label_required_class_style?: string,
    input_class_style?: string,
}

export interface LabelConfigInterface {
    label_text?: string,
    label_required_text?: string,
}

export interface InputConfigInterface {
    id: string,
            
    value: InputValueType,

    type?: string,

    placeholder?: string,
            
    read_only?: boolean;

    required?: boolean;

    is_checked?: boolean;
            
    input_class_style?: string;

    on_change?: Function | null;

    on_click?: Function | null;
            
    on_key_up?: Function | null;

    on_key_down?: Function | null;
}

export interface InputGroupPropsInterface {
    wrapper_class_style?: string;
    
    label_class_style?: string;

    label_required_class_style?: string;

    label_text?: string;

    label_required_text?: string;

    input_config: InputConfigInterface
}