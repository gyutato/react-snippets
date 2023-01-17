import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import { HomeRounded } from "@mui/icons-material";

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
    <header className="fixed top-0 left-0 box-border h-16 w-full flex items-center p-4 border border-solid border-b-slate-200">
      <nav>
        <a
          href="/topOrMarginTop"
          className="inline-block box-border py-1.5 px-2.5 text-sm font-normal text-slate-500 border border-solid border-slate-500 rounded-full hover:bg-slate-100 transition duration-500"
        >
          topOrMarginTop
        </a>
      </nav>
      <HomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeRounded />
      </HomeBtn>
    </header>
  );
};

export default Header;
