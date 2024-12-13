/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";
import { Typography } from "@mui/material"
import Header from "./header";
import SlideBar from "./slide-bar";
import style from "./index.module.scss";
interface Props {
    children: React.ReactNode;
}

const Index: React.FC<Props> = props => {
    const { children } = props;
    return <Typography component={"div"} className={ style["app"]}>
         <SlideBar className="slide-bar" />
        <Typography className="main" component={"main"}>
            <Header className="header" />
            {children}
        </Typography>
    </Typography>;
};

export default memo(Index);
