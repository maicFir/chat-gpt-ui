/**
 * @description 请添加组件描述
 * @author maicFir
 */
"use client";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  Typography,
  Box,
  Popper,
  Fade,
  Paper,
  Switch,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  TaskAlt as TaskAltIcon,
  ErrorOutline as ErrorOutlineIcon,
  ChevronRight as ChevronRightIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { APP_MENU, PagePathName } from "@/constants";
import { useGlobalStore } from "@store/index";
import { useIsPc } from "@hooks/index";
import SlideBar from "../slide-bar";
import style from "./index.module.scss";
interface Props {
  className?: string;
}

const Index: React.FC<Props> = (props) => {
  const { className = "" } = props;
  const { push } = useRouter();
  const { modelKey, userName } = useGlobalStore();
  const { isPc } = useIsPc();
  const isSmallScreenPc = useMediaQuery("(min-width:1025px)");
  const [visibleOpen, setVisibleOpen] = useState(false);
  const [defaultKey, setDefaultKey] = useState("gpt-4o");
  const [modelList, setModelList] = useState([
    {
      title: "GPT-4o",
      subTitle: "适用于大多数任务",
      key: "gpt-4o",
    },
    {
      title: "o1",
      subTitle: "适用高级推理",
      key: "o1",
    },
    {
      title: "o1-mini",
      subTitle: "推理速度更快",
      key: "o1-mini",
    },
  ]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const id = open ? "simple-popper" : undefined;

  const currentMenu = APP_MENU.find((v) => v.key === modelKey);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      event.stopPropagation();
    },
    [anchorEl]
  );

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      setAnchorEl(null);
    });
    return () => {
      document.body.removeEventListener("click", () => {
        setAnchorEl(null);
      });
    };
  }, []);

  const appClass = clsx(style["app"], className);

  const handleSetApiKey = () => {
    push(PagePathName.API_KEY);
  };
  const handleOpenMenu = (bool: boolean) => {
    setVisibleOpen(bool);
  };
  return (
    <Box className={appClass} display={"flex"} justifyContent={"space-between"}>
      <Typography component={"div"} display={"flex"} alignItems={"center"}>
        {isPc && isSmallScreenPc ? (
          <></>
        ) : (
          <MenuIcon onClick={() => handleOpenMenu(true)} />
        )}
        <Typography
          className="app-title"
          display={"flex"}
          alignItems={"center"}
          component={"div"}
          onClick={handleClick}
        >
          {currentMenu?.title}
          <ArrowForwardIosIcon
            sx={{
              transform: "rotate(90deg)",
              fontSize: "14px",
              color: "#b4b4b4",
              marginLeft: "5px",
            }}
          />
        </Typography>
      </Typography>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        sx={{ zIndex: 1000 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ border: 1, p: "10px", borderColor: "#e5e5e5" }}>
              <Typography component={"div"} sx={{ padding: "10px" }}>
                <Typography
                  component={"div"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography>模型</Typography>
                  <ErrorOutlineIcon />
                </Typography>
                <Typography component={"div"}>
                  {modelList.map((v, i) => {
                    return (
                      <Typography
                        key={i}
                        component={"div"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        sx={{
                          padding: "8px 5px",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                      >
                        <Typography component={"div"}>
                          <Typography>{v.title}</Typography>
                          <Typography>{v.subTitle}</Typography>
                        </Typography>
                        {defaultKey == v.key ? <TaskAltIcon /> : null}
                      </Typography>
                    );
                  })}
                  <Typography
                    component={"div"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Typography>模型更多</Typography>
                    <ChevronRightIcon />
                  </Typography>
                </Typography>
                <Typography
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography>临时聊天</Typography>
                  <Typography>
                    <Switch />
                  </Typography>
                </Typography>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Typography component={"div"} display={"flex"} alignItems={"center"}>
        <Typography
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "100%",
            backgroundColor: "#c45c24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
          }}
          onClick={handleSetApiKey}
        >
          {userName || "Elen"}
        </Typography>
      </Typography>
      <Drawer open={visibleOpen} onClose={() => handleOpenMenu(false)}>
        <SlideBar />
      </Drawer>
    </Box>
  );
};

export default memo(Index);
