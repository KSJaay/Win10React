// Import node_modules
import React from "react";
import styled from "styled-components";

// Whole thing is just an iframe
const Github = () => {
  return (
    <Container>
      <iframe
        src={"https://github1s.com/KSJaay/Win10React"}
        width="100%"
        height="100%"
        frameBorder="0"
        title="KSJaay Github Win10React"
        id="github-Win10React"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #1e1e1e;
`;

export default Github;
