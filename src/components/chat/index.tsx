/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import ChatInput from "@comp/home/chat-input";
import ChatContent from "@comp/home/chat-content";
import style from "./index.module.scss";

interface Props {}

const Index: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <Box className={style["app"]}>
      <ChatContent />
          <ChatInput />
          <Typography textAlign={"center"} sx={{padding: "10px 0"}}>ChatGPT 也可能会犯错。请核查重要信息。</Typography>
    </Box>
  );
};

export default memo(Index);
