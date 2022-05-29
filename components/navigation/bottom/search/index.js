import styled from "styled-components";
import SearchBar from "./bar";

export default function search() {
  return (
    <Content>
      <SearchBar />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
`;
