/**
 * @description 请添加组件描述
 * @author maicFir
 */
"use client";
import React, { memo } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { DeleteForever as DeleteForeverIcon } from "@mui/icons-material";
import { useGlobalStore } from "@store/index";
import { formatTime } from "@utils/index";
import style from "./index.module.scss";
interface Props {}

const Title = (props: { routerId: string }) => {
  const { routerId } = props;
  const { push } = useRouter();
  const { chatIdObj, storeChatObj } = useGlobalStore();
  const handleDelete = () => {
    Reflect.deleteProperty(chatIdObj, routerId);
    storeChatObj(chatIdObj);
    push("/");
  };
  return (
    <Typography
      component={"div"}
      color="#fff"
      display={"flex"}
      alignItems={"center"}
    >
      <Typography component={"div"} onClick={handleDelete}>
        <DeleteForeverIcon />
        <Typography component={"span"} sx={{ paddingLeft: "5px" }}>
          DELETE
        </Typography>
      </Typography>
    </Typography>
  );
};

const Index: React.FC<Props> = (props) => {
  const {} = props;
  const { push } = useRouter();
  const { chatIdObj } = useGlobalStore();
  const router_id = Object.keys(chatIdObj) || [];

  const handleToPage = (rouer_id: string) => {
    push(`/chat/${rouer_id}`);
  };
  return (
    <Box className={style["app"]}>
      {router_id.map((rouer_id: any, index) => (
        <Typography
          component={"div"}
          key={index}
          onClick={() => {
            handleToPage(rouer_id);
          }}
          className="cursor-pointer"
        >
          <Typography
            component={"div"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography component={"div"}>
              <Typography className="text-ellipsis">
                {chatIdObj[rouer_id][0].ask}
              </Typography>
              <Typography fontSize={"14px"}>
                {formatTime(chatIdObj[rouer_id][0].date, "YYYY-MM-DD HH:mm:ss")}
              </Typography>
            </Typography>
            <Tooltip
              arrow
              title={<Title routerId={rouer_id} />}
              placement="bottom"
            >
              <Typography className="cursor-pointer" component={"div"}>
                ...
              </Typography>
            </Tooltip>
          </Typography>
        </Typography>
      ))}
    </Box>
  );
};

export default memo(Index);
