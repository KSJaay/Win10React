import { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import BottomNavigation from "./navigation/bottom";

const Container = () => {
  useEffect(() => {
    window.addEventListener("click", (event) => {});
  });

  return (
    <MainContainer
      style={{
        backgroundImage: `url("/images/Backgrounds/Desert.webp")`,
        backgroundSize: "cover",
      }}
    >
      <Content></Content>
      <BottomNavigation />
    </MainContainer>
  );
};

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

export default observer(Container);
