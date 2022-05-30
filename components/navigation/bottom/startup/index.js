import styled from "styled-components";
import WindowsLogo from "./logo";

export default function Startup() {
  return (
    <Content>
      <WindowsLogo />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
`;
