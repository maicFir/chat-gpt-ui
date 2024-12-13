/**
 * @description 请添加组件描述
 * @author maicFir
 */
"use client";
import React, { memo } from "react";
import { Typography } from "@mui/material";
import AppStore from "./app-store";
import AppContent from "./app-content";
import AppCombo from "./app-combo";
import style from "./index.module.scss";

interface Props {}


const ContentHistory: React.FC<Props> = (props) => {
  const {} = props;


  return (
    <Typography className={style["app"]} component={"div"}>
          <AppStore />
          <AppContent />
          <AppCombo />
    </Typography>
  );
};

export default memo(ContentHistory);
