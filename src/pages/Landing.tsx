import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      id="landingContainer"
      className="relative h-full w-full flex flex-col justify-center items-center"
    >
      <h2 className="font-bold text-7xl text-center m-4">React Snippets</h2>
      <h4 className="font-normal text-base text-center">
        archived by @gyutato
      </h4>
      <p className="font-normal text-base text-slate-400 text-center my-2">
        <em>
          provides output web elements and the source code used, <br />
          as a result of <code>React.js</code> practice
        </em>
      </p>
      <GitHub
        onClick={() => {
          window.location.href = "https://github.com/gyutato/react-snippets";
        }}
      />
    </div>
  );
};

export default Landing;
