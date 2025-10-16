
export type InputValueType = string | number | boolean | null | string[];

export type ButtonType = "button" | "submit" | "reset" | undefined;

export type SortDirectionType = "asc" | "desc" | "none";

export interface InputGroupClassStyleInterface {
    wrapper_class_style?: string;
    label_class_style?: string;
    label_required_class_style?: string;
    input_class_style?: string;
}

export interface SearchFieldClassStyleInterface {
    wrapper_class_style?: string;
    label_class_style?: string;
    label_required_class_style?: string;
    search_wrapper_class_style?: string;
    btn_wrapper_class_style?: string;
    input_wrapper_class_style?: string;
}

export interface LabelConfigInterface {
    label_text?: string,
    label_required_text?: string,
}

export interface InputUIPropsInterface {
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

    input_config: InputUIPropsInterface
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

export interface ButtonUIPropsInterface {
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

export interface NavLinkUIPropsInterface {
    wrapper_class_style?: string;

    active_menu_class_style?: string;

    icon_img_wrapper_class_style?: string;

    icon_img_class_style?: string;

    content_class_style?: string;

    content?: string;

    id: string;

    link?: string | null;

    icon?: string | null;

    img_src?: string | null;

    img_alt_text?: string | null;

    on_click?: (event: MouseEvent) => void;

    is_active?: (id: string) => boolean;

    sub_menu_list?: NavLinkUIPropsInterface[];
}

export interface ImgAvatarUIPropsInterface {
    id: string;
    img_src?: string | null;
    img_alt_text?: string | null;
    initials?: string | null;
    right_slot_content?: string | null;
    wrapper_class_style?: string;
    avatar_circle_class_style?: string;
    img_class_style?: string;
    initials_class_style?: string;
    right_slot_class_style?: string;
    on_click?: (event: MouseEvent) => void | null;

}

export interface ImageTextUIPropsInterface {
    wrapper_class_style?: string;
    img_wrapper_class_style?: string;
    img_class_style?: string;
    text_class_style?: string;
    image_src?: string | null;
    img_alt_text?: string | null;
    text_content?: string | null;
}

export interface MenuListUIPropsInterface {
    id: string;
    parent_id?: string;
    wrapper_class_style?: string;
    list_class_style?: string;
    list_item_class_style?: string;
    menu_list?: NavLinkUIPropsInterface[];
}

export interface ModalSidebarUIPropsInterface {
    id: string;
    visible: boolean;
    wrapper_class_style?: string;
    sidebar_class_style?: string;
    section_1_wrapper_class_style?: string;
    section_2_wrapper_class_style?: string;
    on_click?: ((event?: MouseEvent) => void) | null;
}

export interface BreadCrumbUIPropsInterface {
    wrapper_class_style?: string;

    list_class_style?: string;

    list_item_class_style?: string;

    divider_class_style?: string;

    divider_content?: string;

    menu_list?: NavLinkUIPropsInterface[];
}

export interface BreadCrumgListInterface {
  menu_text: string;

  menu_svg_icon?: string;

  menu_link?: string | null;
}

export interface SearchFieldUIPropsInterface {
  wrapper_class_style?: string;
  label_class_style?: string;
  label_required_class_style?: string;
  search_wrapper_class_style?: string;
  btn_wrapper_class_style?: string;
  input_wrapper_class_style?: string;
  label_text?: string;
  label_required_text?: string;
  input_config: InputUIPropsInterface;
  btn_config: ButtonUIPropsInterface;
}

export interface SortableHeaderCellUIPropsInterface {
  id?: string;
  label_content: string;
  sortable?: boolean;
  sort_direction?: SortDirectionType;
  wrapper_class_style?: string;
  icon_class_style?: string;
  on_sort?: (event:MouseEvent, direction: SortDirectionType) => void;
}

export interface TableColumnInterface extends Partial<SortableHeaderCellUIPropsInterface> {
  key: string;
  sortable?: boolean;
}

export interface TableHeaderUIPropsInterface {
  columns: TableColumnInterface[];
  sn_text?: string | null;
  actions_text?: string | null;
  wrapper_class_style?: string;
}
