/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, {memo} from "react";
import ApiKeyPage from "@comp/api-key"
interface Props {}

const Page: React.FC<Props> = props => {
  const {} = props;
  return <ApiKeyPage />;
};

export default memo(Page);
