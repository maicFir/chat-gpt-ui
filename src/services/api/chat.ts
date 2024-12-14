

/**
 * @description 获取k线历史数据
 * @param params 
 * @returns 
 */

export const getOpenRouterApi = async (
    params: API.openApi,
    headers: any,
    callback: Function
) => {
    try {
        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              method: "POST",
              headers,
              body: JSON.stringify(params),
            }
          );

        if (!response.body) {
            throw new Error("No response body");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let chunk = "";
        let fullText = "";
        while (!done) {
          const { value, done: chunkDone } = await reader.read();
          done = chunkDone;
          chunk += decoder.decode(value, { stream: true });

          // Split the chunk by lines and process each line
          const lines = chunk.split("\n");
          for (let line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6); // Remove the 'data: ' prefix
              if (data === "[DONE]") {
                done = true; // End of stream
                break;
              }

              try {
                const json = JSON.parse(data);
                const content = json?.choices?.[0]?.delta?.content;
                if (content) {
                    fullText += content;
                    callback(fullText)
                }
              } catch (e) {
                console.error("Error parsing data:", e);
              }
            }
          }
        }
      
    }   catch (error) {
        
    }
};







