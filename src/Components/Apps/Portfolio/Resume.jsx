// Import node_modules
import React from "react";
import styled from "styled-components";
import ResumePdf from "./../../../Assets/Resume.pdf";

// Iframe with my resume
const Resume = () => {
  return (
    <Container>
      <iframe
        width={"100%"}
        height={"100%"}
        src={ResumePdf}
        title="KSJaay CV"
        frameBorder="0"
      ></iframe>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default Resume;
