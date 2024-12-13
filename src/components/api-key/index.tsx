"use client";
/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo, useState } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useGlobalStore } from "@store/index";
import { PagePathName } from "@src/constants";
import style from "./index.module.scss";
interface Props {}
type userItemType = {
  API_KEY: string;
  USER_NAME: string;
};
const Index: React.FC<Props> = (props) => {
  const {} = props;
  const { push } = useRouter();
  const { storeApiScrect, storeUserName, api_screct } = useGlobalStore();

  const [userFormData, setUserFormData] = useState<userItemType>({
    API_KEY: api_screct,
    USER_NAME: "Elen",
  });

  const onValidate = (values: userItemType) => {
    const errors = {} as userItemType;
    if (!values.API_KEY) {
      errors.API_KEY = "API_KEY is not empty";
    }
    if (!values.USER_NAME) {
      errors.USER_NAME = "USER_NAME is not empty";
    }
    return errors;
  };

  return (
    <Box className={style["app"]}>
      <Formik
        initialValues={{
          ...userFormData,
        }}
        validate={onValidate}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          const { API_KEY, USER_NAME } = values;
          setSubmitting(false);
          storeApiScrect(API_KEY);
          storeUserName(USER_NAME);
          push(PagePathName.ChatGpt);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form-app">
            <Typography
              component="div"
              sx={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
            >
              <Typography component="div" display="flex">
                <Typography
                  className="required"
                  display={"flex"}
                  alignItems={"center"}
                >
                  API_KEY:
                </Typography>
                <Input
                  type="text"
                  name="API_KEY"
                  placeholder="Please enter API_KEY"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.API_KEY}
                  disableUnderline
                  tabIndex={10}
                  fullWidth
                />
              </Typography>
              <p className="error">
                {errors.API_KEY && touched.API_KEY && errors.API_KEY}
              </p>
            </Typography>
            <Typography
              component="div"
              sx={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
            >
              <Typography component="div" display={"flex"}>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  className="required"
                >
                  USER_NAME:
                </Typography>
                <Input
                  type="text"
                  name="USER_NAME"
                  placeholder="Please enter USER_NAME"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.USER_NAME}
                  disableUnderline
                  tabIndex={10}
                  fullWidth
                />
              </Typography>
              <p className="error">
                {errors.USER_NAME && touched.USER_NAME && errors.USER_NAME}
              </p>
            </Typography>

            <Typography
              component="div"
              sx={{ color: "#111", margin: "10px 0" }}
            >
              <Button
                sx={{ backgroundColor: "#94e79d !important" }}
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                提交
              </Button>
            </Typography>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default memo(Index);
