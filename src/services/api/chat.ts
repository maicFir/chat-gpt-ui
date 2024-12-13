import fetchInterceptor from "../interceptors";
/**
 * @description 获取k线历史数据
 * @param params 
 * @returns 
 */
export const getOpenRouterApi = async (params: API.openApi, headers: any) => {
    const res = await fetchInterceptor.post("https://openrouter.ai/api/v1/chat/completions", params, {
        headers
    });
     return res;
}
