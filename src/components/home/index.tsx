/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";
import { Box } from "@mui/material";
import clsx from "clsx";
import ChatInput from "./chat-input";
import styles from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = (props) => {
    const { } = props;
    const data = [];
    const appClass = clsx(styles["app"], {
        [styles["app-no-data"]]: data.length === 0,
    });
    return <Box className={appClass}>
        <ChatInput />
  </Box>;
};

export default memo(Index);
