/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";

import { IconType } from "./index";

const Loading: React.FC<Partial<IconType>> = (props) => {
  const { width = 200, height = 200 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="200"
      height="200"
    >
      <g data-idx="1">
        <circle
          fill="rgb(171, 189, 129)"
          r="0.501617431640625"
          cy="50"
          cx="84"
          data-idx="2"
        ></circle>
        <circle
          fill="#e15b64"
          r="9.498382568359375"
          cy="50"
          cx="16"
          data-idx="5"
        ></circle>
        <circle
          fill="#f47e60"
          r="10"
          cy="50"
          cx="48.29450225830078"
          data-idx="8"
        ></circle>
        <circle
          fill="#f8b26a"
          r="10"
          cy="50"
          cx="82.29450225830078"
          data-idx="11"
        ></circle>
        <circle fill="#abbd81" r="0" cy="50" cx="16" data-idx="14"></circle>
        <g data-idx="17"></g>
      </g>
      <text
        data-watermark="true"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeOpacity="0.1"
        fill="black"
        fillOpacity="0.1"
        stroke="white"
        strokeWidth="1"
        font-size="5.0"
        x="50"
        y="50"
        data-idx="18"
      >
        LOADING.IO
      </text>
    </svg>
  );
};

export default memo(Loading);
