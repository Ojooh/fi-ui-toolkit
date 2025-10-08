
export const ComponentClassStyles = {
    loader_ui: {
        list_loader_ui: {
            wrapper_class_style: "w-full flex flex-col items-center justify-center animate-pulse py-4 px-0",
            bar_class_style: "w-full h-12 my-4 bg-gray-200 rounded-lg dark:bg-gray-700 shadow"
        },
        screen_loader_ui: {
            wrapper_class_style: "fixed inset-0 flex items-center justify-center overflow-hidden",
            loader_class_style: "flex flex-col items-center space-y-4 animate-fade-in",
            loader_symbol_class_style: "",
            loader_text_class_style: "",

        }
    },
    alert_ui: {
        status_alert_ui: {
            wrapper_class_style: "fixed inset-0 flex items-start justify-end overflow-hidden",
            alert_box_class_style: "relative top-6 right-6 max-w-sm w-full flex items-stretch rounded-lg shadow-lg animate-slide-in",
            close_btn_class_style: "absolute -top-3 -left-3 w-8 h-8 flex items-center text-center rounded-full shadow-md cursor-pointer",
            status_icon_wrapper_class_style: "flex items-center justify-center w-2/12  h-full p-2",
            status_icon_class_style: "w-full font-bold",
            status_content_wrapper_class_style: "flex-1 w-10/12 h-full p-4",
            status_content_class_style: "text-sm font-medium"
        },
        toast_alert_ui: {
            wrapper_class_style: "w-full flex items-stretch justify-start border-l-4",
            icon_wrapper_class_style: "flex items-center justify-center w-1/12 p-1",
            icon_class_style: "flex items-center justify-center w-6 h-6",
            message_class_style: "flex-1 w-11/12 h-full p-2"
        }
    },
    copy_right_ui: {
        wrapper_class_style: "w-full text-center py-4",
        text_class_style: ""
    },
    input_ui: {
        input_class_style: "w-full py-2 px-1",
        wrapper_class_style: "flex gap-2 justify-center"

    },
    input_group_ui: {
        wrapper_class_style: "w-full my-4",
        label_class_style: "text-sm font-bold",
        label_required_class_style: "italic font-medium",
    },
    button_ui: {
        btn_class_style: "w-full cursor-pointer"
    },
    img_avatar_ui: {
        wrapper_class_style: "w-full flex items-center h-full",
        avatar_circle_class_style: "flex items-center rounded-full overflow-hidden",
        img_class_style: "w-full h-auto object-cover",
        initials_class_style: "uppercase",
        right_slot_class_style: "flex items-center"

    },
    image_text_ui: {
        wrapper_class_style: "w-full h-full flex items-center justify-center space-x-2",
        img_wrapper_class_style: "w-full h-auto flex items-center justify-center p-0 m-0",
        img_class_style: "object-contian",
        text_class_style: "text-md text-start font-bold",

    },
    navigation_ui: {
        top_bar_ui: {
            wrapper_class_style: "w-screen px-4 flex flex-wrap items-center justify-between relative h-full",
            section_1_wrapper_class_style: "md:w-3/12 w-6/12 flex items-center overflow-hidde h-full",
            section_2_wrapper_class_style: "md:w-6/12 w-full flex items-center overflow-hidden md:order-1 order-2 h-full",
            section_3_wrapper_class_style: "md:w-3/12 w-6/12 flex items-center  md:order-2 order-1 h-full"
        },
        nav_link_ui: {
            wrapper_class_style: "flex items-center cursor-pointer",
            active_menu_class_style: "",
            icon_img_wrapper_class_style: "flex items-center justify-center overflow-hidden",
            icon_img_class_style: "w-full h-auto object-cover",
            content_class_style: "flex items-center"
        },
        menu_list_ui: {
            wrapper_class_style: "hidden divide-y divide-gray-100",
            list_class_style: "py-2",
            list_item_class_style: ""
        },
        modal_sidebar_ui: {
            wrapper_class_style: "fixed inset-0 z-[90]",
            sidebar_class_style: "fixed top-0 h-screen transition-all duration-[2000s] ease-in-out",
            section_1_wrapper_class_style: "h-[15%] flex items-center justify-center",
            section_2_wrapper_class_style: "h-[85%] overflow-y-auto"
        }
    }
}