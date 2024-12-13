/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, {memo} from "react";
import ChatPage from "@comp/chat";
interface Props {}

const Index: React.FC<Props> = props => {
  const {} = props;
  return <ChatPage />;
};

export default memo(Index);
