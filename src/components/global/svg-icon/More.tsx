/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, {memo} from "react";

import { IconType } from "./index";

const MoreIcon: React.FC<Partial<IconType>> = props => {
    const {
        width = 200,
        height = 200,
        onClick
  } = props;
    return <svg width={ width} height={height} onClick={onClick} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 512a64 64 0 1 0 128 0 64 64 0 0 0-128 0zM448 512a64 64 0 1 0 128 0 64 64 0 0 0-128 0zM768 512a64 64 0 1 0 128 0 64 64 0 0 0-128 0z" fill="#000000" opacity=".65" ></path></svg>;
};

export default memo(MoreIcon);
