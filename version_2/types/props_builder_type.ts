
export type InputValueType = string | number | boolean | null;

export type ButtonType = "button" | "submit" | "reset" | undefined;

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

     wrapper_class_style?: string;

    length?: number;

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

export interface AlertBorderClassStyleInterface {
    success_border_class_style?: string;
    error_border_class_style?: string;
    info_border_class_style?: string;
    warning_border_class_style?: string;
}

export interface AlertStatusClassStyleInterface {
    success_class_style?: string;
    error_class_style?: string;
    info_class_style?: string;
    warning_class_style?: string;
}

export interface ToastAlertClassStyleInterface {
    wrapper_class_style?: string;
    icon_wrapper_class_style?: string,
    icon_class_style?: string,
    message_class_style?: string,
    border_class_styles?: AlertBorderClassStyleInterface,
    status_class_styles?: AlertStatusClassStyleInterface
}

export interface ToastAlertPropsInterface {
    wrapper_class_style?: string;
    icon_wrapper_class_style?: string;
    icon_class_style?: string;
    message_class_style?: string;
    status_icon: string;
    status: string;
    message?: string;
    on_close?: Function | null
}

export interface ButtonPropsInterface {
    type: ButtonType,

    id?: string,

    btn_class_style?: string,

    clicked?: boolean;
    
    show_loader?: boolean;

    disabled?: boolean;

    loader_content_text?: string,

    content_text?: string,

    on_click?: Function | null
}
