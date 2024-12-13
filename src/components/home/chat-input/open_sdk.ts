import OpenAI from "openai";

export class OpenSDK {
    private openai;
    private model: string;
    private message: any;
    constructor({ apiKey, model }: {apiKey: string, model?: string}) {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: apiKey || process.env.NEXT_PUBLIC__CHAT_GPT_KEY,
            dangerouslyAllowBrowser: true,
        });
        this.openai = openai;
        this.model = model || "mistralai/mistral-7b-instruct-v0.1";
    }
     async askOpenAi() {
        const completion = await this.openai.chat.completions.create({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "What is the meaning of life?",
            },
          ],
        });
        this.message = completion.choices[0].message;
        console.log(completion.choices[0].message);
      }
}