import { RenderHtmlOptionsInterface } from "../types/util_type";

class RenderHtmlUtil {

    public static renderHtml({ 
        text = "", 
        icon = "", 
        element = "span", 
        order = "icon-first", 
        icon_class_style = "w-8 h-8 flex items-center mr-2",
        class_style = "flex items-center", 
        href = "#"
    }: RenderHtmlOptionsInterface): string {
        const icon_html = icon 
            ? `<span class="${icon_class_style}">${icon}</span>`
            : "";

        if (element === "a") {
            return `
            <a href="${href}" class="${class_style || ""}">
                ${order === "icon-first" ? `${icon_html}${text}` : `${text}${icon_html}`}
            </a>`;
        }

        return `
        <${element} class="${class_style || ""}">
            ${order === "icon-first" ? `${icon_html}${text}` : `${text}${icon_html}`}
        </${element}>`;
    }

}

export default RenderHtmlUtil; 