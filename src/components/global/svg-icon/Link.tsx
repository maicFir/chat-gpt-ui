/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, {memo} from "react";

import { IconType } from "./index";

const LinkIcon: React.FC<Partial<IconType>> = props => {
    const {
        width = 24,
        height = 24,
        onClick
  } = props;
  return  <svg
      className="link"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={onClick}
>
  <path
    d="M910.496 213.536C804.16 82.208 611.488 61.952 480.128 168.32l-100.768 81.6 50.336 62.176 100.768-81.6a225.984 225.984 0 1 1 284.448 351.264l-107.968 87.424 50.336 62.176 107.968-87.424a305.984 305.984 0 0 0 45.248-430.4zM516.352 823.552a225.984 225.984 0 1 1-284.448-351.264l110.976-89.856-50.336-62.176-110.976 89.856C50.24 516.448 29.984 709.152 136.32 840.48c106.336 131.328 299.04 151.584 430.368 45.248l105.12-85.12-50.336-62.176-105.12 85.12z"
 
  ></path>
  <path d="M676.16 353.28l51.232 61.44-343.552 286.304-51.2-61.44z"></path>
</svg>;
};

export default memo(LinkIcon);
