import styled from "styled-components";
import BottomNavigation from "./navigation/bottom";

export default function Container() {
  return (
    <MainContainer>
      <Content>asd</Content>
      <BottomNavigation></BottomNavigation>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;
