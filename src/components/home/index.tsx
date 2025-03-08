/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";
import Link from "next/link"
import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import ChatInput from "./chat-input";
import styles from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = (props) => {
  const {} = props;
  const data = [];
  const appClass = clsx(styles["app"], {
    [styles["app-no-data"]]: data.length === 0,
  });
  return (
    <Box className={appClass}>
      
       <Link href="twitter://user?screen_name=JupiterExchange" target="_blank">twitter://user?screen_name=JupiterExchange</Link>
      
      <Link href="https://x.com/JupiterExchange" target="_blank">https://x.com/JupiterExchange</Link>
        <Link href="https://x.com/@JupiterExchange" target="_blank">https://x.com/@JupiterExchange</Link>
        <Link href="twitter://JupiterExchange" target="_blank">twitter://JupiterExchange</Link>
       <Link href="x://JupiterExchange" target="_blank">x://JupiterExchange</Link>
      <Link href="x://@JupiterExchange" target="_blank">x://JupiterExchange</Link>
       <Link href="x://user?screen_name=JupiterExchange" target="_blank">twitter://user?screen_name=JupiterExchange</Link>
       <Link href="twitter://profile?screen_name=JupiterExchange" target="_blank">twitter://profile?screen_name=JupiterExchange</Link>
       <Link href="x://profile?screen_name=JupiterExchange" target="_blank">x://profile?screen_name=JupiterExchange</Link>
      <ChatInput />
      <Typography
        textAlign={"center"}
        sx={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          right: "0px",
          margin: "0 auto",
          fontSize: "14px",
        }}
      >
        ChatGPT 也可能会犯错。请核查重要信息。
      </Typography>
    </Box>
  );
};

export default memo(Index);
