// Import node_modules
import React from "react";
import styled from "styled-components";

// Worst feeling ever is coded below
const BSOD = () => {
  return (
    <Container>
      <SadFace>:(</SadFace>
      <ErrorText>
        Your PC ran into a problem and needs to restart. We're just collected
        some error information. Please restart your PC to fix this issue.
      </ErrorText>
      <SmallText>
        Just refresh the broswer if you don't get the joke :)
      </SmallText>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 65%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.font};
  background-color: #0079d8;
  flex-direction: column;
  padding: 0 25% 0 10%;
`;

const SadFace = styled.div`
  font-size: 8em;
`;

const ErrorText = styled.div`
  margin-top: 30px;
  font-size: 2em;
`;

const SmallText = styled.div`
  margin-top: 30px;
  font-size: 12px;
`;

export default BSOD;
