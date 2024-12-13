/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";
import { Typography } from "@mui/material";
import {
  Search as SearchIcon,
  BorderColor as EditIcon,
} from "@mui/icons-material";

import { ClooseIcon } from "@comp/global/svg-icon";
import style from "./index.module.scss";
interface Props {}

const ToolBar: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <Typography
      className={style["app"]}
      component="div"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        height: "56px",
      }}
    >
      <Typography component={"div"} className="cloose-icon">
        <ClooseIcon />
      </Typography>
      <Typography
        component={"div"}
        display={"grid"}
        gap={"8px"}
        gridTemplateColumns={"1fr 1fr"}
      >
        <Typography component={"div"} className="search">
          <SearchIcon />
        </Typography>
        <Typography component={"div"} className="edit">
                  <EditIcon sx={{color: '#5d5d5d'}} />
        </Typography>
      </Typography>
    </Typography>
  );
};

export default memo(ToolBar);
