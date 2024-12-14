/**
 * @description 测试页面
 * @author maicFir
 */
"use client";
import React, { useState, useEffect } from "react";
const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC__CHAT_GPT_KEY;
const YOUR_SITE_URL = "";
const YOUR_SITE_NAME = "";

const TypingEffect = () => {
  const [responseText, setResponseText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${OPENROUTER_API_KEY}`,
              "HTTP-Referer": YOUR_SITE_URL,
              "X-Title": YOUR_SITE_NAME,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "mistralai/mistral-7b-instruct-v0.1",
              stream: true,
              messages: [
                {
                  role: "user",
                  content: "介绍一下java",
                },
              ],
            }),
          }
        );
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
                  updateTypingEffect(fullText);
                }
              } catch (e) {
                console.error("Error parsing data:", e);
              }
            }
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const updateTypingEffect = (text: string) => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval); // Stop the typing effect when all text is shown
      }
    }, 50); // Adjust typing speed (ms per character)
  };

  return (
    <div>
      <h1>Typing Effect</h1>
      {loading ? <p>Loading...</p> : <p>{displayText}</p>}
    </div>
  );
};

export default TypingEffect;
