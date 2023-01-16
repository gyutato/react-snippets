import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const LandingContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <h2
        style={{
          fontSize: "4.5rem",
          lineHeight: "4.5rem",
          textAlign: "center",
          margin: "0.008%",
        }}
      >
        React Snippets
      </h2>
      <h4>archived by @gyutato</h4>
      <p style={{ color: "#949494" }}>
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
    </LandingContainer>
  );
};

export default Landing;
