import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import { HomeRounded } from "@mui/icons-material";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  box-sizing: border-box;
  height: 8%; // ( 4rem / 1080px ) * 100
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0.8%;
  border-bottom: 1px solid #e7ebf0;
`;

const AStyled = styled.a`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.4rem 0.625rem;

  font-size: 0.875rem;
  font-family: Pretendard;
  font-weight: 400;

  text-decoration: none;
  color: #969ba7;

  border: 1px solid #969ba7;
  border-radius: 100px;
  background: #ffffff;

  &:hover {
    background: #f6f6f6;
    transition: all 0.5s;
  }
`;

const HomeBtn = styled.button`
  position: absolute;
  right: 0;

  height: 100%;
  width: calc(100vh * 0.08);

  border: none;
  border-left: 1px solid #e7ebf0;
  background: none;

  color: #dcdfe3;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: #fafafa;
    box-shadow: 6px 6px 13px #e6e6e6, -6px -6px 13px #ffffff;
    transition: all 0.5s;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <nav>
        <AStyled href="/topOrMarginTop">topOrMarginTop</AStyled>
      </nav>
      <HomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeRounded />
      </HomeBtn>
    </HeaderStyled>
  );
};

export default Header;
