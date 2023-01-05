import React from "react";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <MainWrap>
      <MainCoverBox>{children}</MainCoverBox>
    </MainWrap>
  );
};
const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCoverBox = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 883px;
  height: 571px;
`;
export default Layout;
