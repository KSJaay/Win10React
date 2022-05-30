import styled from "styled-components";

import Search from "./search";
import Startup from "./startup";

import Calendar from "./calendar";
import Language from "./language";
import Wifi from "./wifi";
import Volume from "./volume";
import Hidden from "./hiddenMenu";

export default function BottomNavigation() {
  return (
    <Content>
      <Left>
        <Startup />
        <Search />
      </Left>

      <Center></Center>

      <Right>
        <Hidden />
        <Volume />
        <Wifi />
        <Language />
        <Calendar />
        <Closer />
      </Right>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  height: 48px;
  background-color: var(--secondary-color-opacity-90);
  width: 100%;
`;

const Left = styled.div`
  display: flex;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
`;

const Closer = styled.div`
  height: 48px;
  width: 4px;
  border-left: 1px solid gray;

  &:hover {
    background-color: var(--light-color);
  }
`;
