import SVGIcons from "../resources/svg_icon_resource";
import axios, { AxiosResponse } from "axios";

export type SVGIconName = keyof typeof SVGIcons;

export type LoggerType = 'log' | 'info' | 'warn' | 'error' | 'debug';

export type ContentObjectType = Record<string, any>;

export interface LoggerOptions {
	prefix?: string;
	show_timestamp?: boolean;
}

export interface EncryptedV2Interface {
	encrypted_data: string;
}

export interface CurrentMemberInterface {
	public_id: string,
	first_name: string,
	last_name: string,
	is_fully_authenticated: boolean;
	[key: string]: any
}

export interface OtherMemberDataInterface {
	[key: string]: any
}

export interface RenderHtmlOptionsInterface {
  element?: "span" | "strong" | "p" | "a";
  text?: string;
  icon?: string;
  order?: "icon-first" | "text-first";
  icon_class_style?: string,
  class_style?: string;
  href?: string;
}

export interface LoadingHtmlOptions {
	class_style?: string;
	icon_name?: SVGIconName;
}


export interface APIResponseInterface<T = any> {
  status: string;
  msg: string;
  data?: T;
  full_response?: AxiosResponse;
}

export interface TitleAndSubTitleHTMLInterface {
  title_text?: string;
  sub_title_text?: string;
  wrapper_class_style?: string;
  title_class_style?: string;
  sub_title_class_style?: string;
}
