import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import AppRoutes from "../AppRoutes";

const Contents = styled.div`
  position: fixed;
  background: #fff;
  height: calc(100vh - 100vh * 0.08);
  width: 100vw;
  top: 8%;
  overflow: scroll;
`;

const Body = () => {
  return (
    <Contents id="contents">
      <AppRoutes />
    </Contents>
  );
};

export default Body;
