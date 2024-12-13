export type MENU_ITEM = {
    title: string,
    path: string;
    key: string;
    icon?: any
}
export const enum PagePathName {
    ChatGpt = "/",
    DALLE = "/dalle",
    API_KEY = "/api-key",
}
export const enum PagePathTitle {
    ChatGpt = "ChatGPT",
    DALLE = "Dalle",
}
export const enum PagePathKey {
    ChatGpt = "ChatGPT",
    DALLE = "Dalle",
   
}

export const APP_MENU: MENU_ITEM[] = [
    {
        title: PagePathTitle.ChatGpt,
        path: PagePathName.ChatGpt,
        key: PagePathKey.ChatGpt,
    },
    {
        title: PagePathTitle.DALLE,
        path: PagePathName.DALLE,
        key: PagePathKey.DALLE,
    },
]