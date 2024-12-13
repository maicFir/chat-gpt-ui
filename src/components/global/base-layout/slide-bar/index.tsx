/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, {memo} from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import ToolBar from "./tool-bar";
import ContentHistory from "./content-history";

import style from "./index.module.scss";

interface Props {
    className?: string;
}

const Index: React.FC<Props> = props => {
    const { className = "" } = props;
    const appClass = clsx(style["app"], className);
    return <Typography className={appClass} component={"nav"}>
        <ToolBar />
        <ContentHistory />
    </Typography>;
};

export default memo(Index);
