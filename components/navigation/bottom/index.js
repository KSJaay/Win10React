import styled from "styled-components";
import Search from "./search";

export default function BottomNavigation() {
  return (
    <Content>
      <Search />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  height: 48px;
  background-color: var(--secondary-color);
  width: 100%;
`;
