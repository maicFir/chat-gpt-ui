/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, {memo} from "react";
import { Box } from "@mui/material";
import style from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props;
    return <Box className={ style["app"]}>history content</Box>;
};

export default memo(Index);
