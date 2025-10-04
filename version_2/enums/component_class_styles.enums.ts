
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

    },
    input_group_ui: {
        wrapper_class_style: "w-full my-4",
        label_class_style: "text-sm font-bold",
        label_required_class_style: "italic font-medium",
    },
    button_ui: {
        btn_class_style: "w-full cursor-pointer"
    }
}