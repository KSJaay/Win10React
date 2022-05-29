import styled from "styled-components";
import Container from "./../components/container";

export default function Home() {
  return (
    <Content>
      <Container></Container>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;
