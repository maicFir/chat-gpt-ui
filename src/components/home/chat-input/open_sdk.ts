/**
 * @description 请添加组件描述
 * @author maicFir
 */
import OpenAI from "openai";

export class OpenSDK {
    private openai;
    private model: string;
    private message: any;
    constructor({ apiKey, model, message }: {apiKey: string, model?: string, message: string}) {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: apiKey || process.env.NEXT_PUBLIC__CHAT_GPT_KEY,
            dangerouslyAllowBrowser: true,
        });
        this.openai = openai;
        this.model = model || "mistralai/mistral-7b-instruct-v0.1";
        this.message = message;
    }
     async askOpenAi(askMessage: string) {
        const completion = await this.openai.chat.completions.create({
          model: this.model,
          messages: [
            {
              role: "user",
              content: askMessage,
              
            },
          ],
        });
        this.message = completion.choices[0].message;
        console.log(completion.choices[0].message);
     }
    getMessage() {
        return this.message;
    }
}