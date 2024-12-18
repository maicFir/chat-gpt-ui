import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PagePathKey} from "@src/constants";
const initState = {
    modelKey: "",
    userName: "",
    model: "",
    api_screct: "",
    chatIdObj: {} as any,
    chatId: "",
    routerId: "",
    storeModelKey: (val: any) => { },
    storeUserName: (val: any) => { },
    storeApiScrect: (val: any) => { },
    storeChatObj: (val: any) => { },
    storeChatId: (val: any) => { },
    storeRouterId: (val: any) => { },
    storeModel: (val: any) => { },
};

export const useGlobalStore = create(
    persist<typeof initState>(
      (set) => ({
        modelKey: PagePathKey.ChatGpt,
        userName: "",
        model: "openai/gpt-3.5-turbo-instruct",
        api_screct: process.env.NEXT_PUBLIC__CHAT_GPT_KEY ?? "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",
        chatIdObj: {} as any,
        chatId: "",
        routerId: "",
        storeModelKey: (modelKey: any) => set({ modelKey }),
        storeUserName: (userName) => set({ userName }),
        storeApiScrect: (api_screct) => set({ api_screct }),
        storeChatObj: (chatIdObj: any) => set({ chatIdObj }),
        storeChatId: (chatId: any) => set({ chatId }),
        storeRouterId: (routerId: any) => set({ routerId }),
        storeModel: (model: any) => set({ model }),
      }),
      {
        name: "chat-gpt-ui",
        getStorage: () => localStorage,
        serialize: (state: any) =>
          JSON.stringify(
            state,
            (key, value) => (typeof value === "function" ? value : value) // 自定义序列化逻辑
          ),
        deserialize: (str: any) =>
          JSON.parse(str, (key, value) => {
            // 如果需要，这里可以实现自定义的反序列化逻辑
            return value;
          }),
      } as any
    )
  );
