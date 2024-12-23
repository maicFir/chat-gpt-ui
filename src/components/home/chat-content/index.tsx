/**
 * @description 请添加组件描述
 * @author maicFir
 */
"use client";
import React, { memo, useMemo, useCallback, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { useGlobalStore } from "@store/index";
import { ChatGptIcon, Loading } from "@comp/global/svg-icon";
import { getOpenRouterApi } from "@src/services/api";
import { message } from "@comp/global";
import "highlight.js/styles/github.css";
import style from "./index.module.scss";

interface Props {}

const Index: React.FC<Props> = (props) => {
  const {} = props;

  const params = useParams();
  const { chatIdObj, routerId, api_screct, chatId, storeChatObj, model } =
    useGlobalStore();

  const chartData = useMemo(() => {
    return chatIdObj[params?.id] || [];
  }, [chatIdObj, params?.id]);

  const getStreamData = async () => {
    const current_routerId: any = params?.id || routerId;
    if (!api_screct) {
      message.alert({
        type: "error",
        msg: "please config api key",
      });
      return;
    }
    if (!current_routerId) {
      return;
    }
    // console.log(chatIdObj);
    // console.log(chatId, "=chatId");
      const lastIndex = chatIdObj[current_routerId]?.length - 1;
    if (lastIndex === -1 || Number.isNaN(lastIndex)) {
        return;
    }
    const currentItem = chatIdObj[current_routerId][lastIndex];
    if (!currentItem) {
      return;
    }

    const payload = {
      model: model,
      messages: [{ role: "user", content: currentItem?.ask }],
      stream: true,
    };
    // 简单深拷贝一份
    const new_chat_obj = JSON.parse(JSON.stringify(chatIdObj));
    try {
      await getOpenRouterApi(
        payload,
        {
          Authorization: `Bearer ${api_screct}`,
          //"HTTP-Referer": "https://gptui.iruns.xyz/", // Optional, for including your app on openrouter.ai rankings.
          // "X-Title": `chat-gpt-ui`, // Optional. Shows in rankings on openrouter.ai.
          "Content-Type": "application/json",
        },
        (content: string) => {
          console.log(content);
          Object.keys(new_chat_obj).forEach((routerId) => {
            if (routerId === params?.id) {
              new_chat_obj[routerId][lastIndex].answer = content;
            }
          });
          storeChatObj(new_chat_obj);
        }
      );
    } catch (error) {
      message.alert({
        type: "error",
        msg: "Invalid credentials",
      });
      // 清空所有消息
      storeChatObj({});
    }
  };

  useEffect(() => {
    getStreamData();
  }, [chatId]);

  return (
    <Box className={style["app"]}>
      {chartData.map((v: any, index: number) => (
        <Typography component={"div"} key={index}>
          <Typography
            component={"div"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Typography
              bgcolor={"#f3f3f3"}
              display={"inline-block"}
              borderRadius={"44px"}
              padding={"10px 20px"}
            >
              {v.ask}
            </Typography>
          </Typography>
          <Typography
            component={"div"}
            display={"grid"}
            gridTemplateColumns={"32px 1fr"}
            gap={"20px"}
            alignItems={"center"}
            marginTop={"20px"}
            className="answer"
          >
            <Typography
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              component={"div"}
              height={"100%"}
              paddingTop={"5px"}
            >
              <Typography
                width={"32px"}
                border={"1px solid #f3f3f3"}
                borderRadius={"100%"}
                height={"32px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <ChatGptIcon width={18} height={18} />
              </Typography>
            </Typography>
            <Typography component={"div"}>
              {!v.answer ? (
                "loading..."
              ) : (
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {v.answer}
                </ReactMarkdown>
              )}
            </Typography>
          </Typography>
        </Typography>
      ))}
    </Box>
  );
};

export default memo(Index);
