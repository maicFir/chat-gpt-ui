/**
 * @description 请添加组件描述
 * @author maicFir
 */
"use client";
import React, { memo, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter, usePathname, useParams } from "next/navigation";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base";
import {
  North as NorthIcon,
  CleaningServices as CleaningServicesIcon,
} from "@mui/icons-material";
import {
  LanguageIcon,
  LinkIcon,
  GiftIcon,
  SayIcon,
} from "@comp/global/svg-icon";
import { guid, storageUtils } from "@/utils";
import { PagePathName } from "@src/constants";
import { useGlobalStore } from "@src/store";

import style from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = (props) => {
  const {} = props;
  const {
    storeChatObj,
    chatIdObj,
    api_screct,
    storeChatId,
    chatId,
    storeRouterId,
    routerId,
  } = useGlobalStore();
  const { push } = useRouter();
  const params = useParams();
  const pathName = usePathname();
  const isLock = useRef(false);
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = async () => {
    if (isLock.current) {
      return;
    }
    isLock.current = true;
    if (PagePathName.ChatGpt === pathName) {
      const router_gid = guid();
      const chatId = guid();
      storeChatId(chatId);
      storeRouterId(router_gid);
      const objTarget = {
        [router_gid]: [{ ask: searchValue, answer: "", chatId }],
      };
      storeChatObj(objTarget);
      push(`/chat/${router_gid}`);
      isLock.current = false;
    } else {
      console.log(params);
      const newObj: any = {
        ...chatIdObj,
      };
      const chatId = guid();
      storeChatId(chatId);
      Object.keys(chatIdObj).forEach((routerId) => {
        if (params.id === routerId) {
          newObj[routerId].push({
            ask: searchValue,
            answer: "",
            chatId,
          });
        }
      });
      storeChatObj(newObj);
      // 清空输入框
      setSearchValue("");
      isLock.current = false;
    }
  };

  const handleChangeValue = (e: any) => {
    setSearchValue(e.target.value);
  };
  const isHome = PagePathName.ChatGpt === pathName;

  const handleClear = () => {
    if (!params?.id) {
      return;
    }
    // 清空所有缓存
    storageUtils.clear();
    storeChatObj({
      [params?.id as any]: [],
    });
  };
  return (
    <Box className={style["app"]}>
      {isHome ? (
        <Typography
          component={"h1"}
          textAlign={"center"}
          sx={{ paddingBottom: "28px", fontSize: "36px", color: "#111" }}
          className="phone:text-[16px]"
        >
          有什么可以帮忙的？
        </Typography>
      ) : null}

      <Typography component={"div"} className="chat-input-wrap">
        <BaseTextareaAutosize
          minRows={3}
          placeholder="给GPT发送消息"
          onChange={(e) => handleChangeValue(e)}
        />
        <Typography
          component={"div"}
          sx={{ height: "44px" }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            component={"div"}
            display={"grid"}
            alignItems={"center"}
            columnGap={"10px"}
            gridTemplateColumns={"1fr 1fr 1fr 1fr"}
          >
            <LinkIcon />
            <GiftIcon />
            <LanguageIcon />
            <CleaningServicesIcon
              className="cursor-pointer"
              onClick={handleClear}
            />
          </Typography>
          <Typography component={"div"} display={"flex"} alignItems={"center"}>
            <Typography
              sx={{
                backgroundColor: "#000000",
                borderRadius: "100%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="cursor-pointer"
            >
              {searchValue ? (
                <NorthIcon
                  onClick={handleSubmit}
                  sx={{ color: "#fff", cursor: "pointer" }}
                />
              ) : (
                <SayIcon />
              )}
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Box>
  );
};

export default memo(Index);
