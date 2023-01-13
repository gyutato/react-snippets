import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  height: 8%; // ( 4rem / 1080px ) * 100
  width: 100%;

  border-bottom: 1px solid gainsboro;
`;

const Header = () => {
  return <HeaderStyled></HeaderStyled>;
};

export default Header;
