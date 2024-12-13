/**
 * @description 请添加组件描述
 * @author maicFir
 */
"use client";
import React, { memo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Typography } from "@mui/material";
import { BorderColor as EditIcon } from "@mui/icons-material";
import { APP_MENU, PagePathKey, type MENU_ITEM } from "@/constants";
import { ChatGptIcon, MoreIcon } from "@comp/global/svg-icon";
import { useGlobalStore } from "@store/index";
import style from "./index.module.scss";
interface Props {}

const IconMap = new Map([
  [PagePathKey.ChatGpt, <ChatGptIcon width={24} height={24} />],
  [
    PagePathKey.DALLE,
      <Image src={"/agent.webp"} width={24} height={24} alt="" className="rounded-full" />,
  ],
]);

const AppStore: React.FC<Props> = (props) => {
  const { } = props;
  const { storeModelKey} = useGlobalStore();
  const { push } = useRouter();
  const handlePage = ({ path, key }: MENU_ITEM) => {
      push(path);
      storeModelKey(key);
  };
  const handleMore = (v: MENU_ITEM) => {};
  const handleEdit = (v: MENU_ITEM) => {
    console.log("编辑");
  };
  return (
    <Typography component={"div"} className={style["app"]}>
        {APP_MENU.map((v: MENU_ITEM, i) => {
          return (
            <Typography
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
              className="item"
              component={"div"}
              onClick={() => handlePage(v)}
              key={i}
            >
              <Typography display={"flex"} alignItems={"center"}>
                {IconMap.get(v.key as any)}
                <span>{v.title}</span>
              </Typography>
              <Typography
                component={"div"}
                display={"flex"}
                alignItems={"center"}
                className="options"
              >
                {v.key === PagePathKey.DALLE ? (
                  <MoreIcon
                    width={24}
                    height={24}
                    onClick={() => handleMore(v)}
                  />
                ) : null}
                <EditIcon onClick={() => handleEdit(v)} sx={{color: '#5d5d5d'}} />
              </Typography>
            </Typography>
          );
        })}
      </Typography>
  );
};

export default memo(AppStore);