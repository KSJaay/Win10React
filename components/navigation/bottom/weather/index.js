import styled from "styled-components";

export default function Weather() {
  return <Content>10c Raining</Content>;
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  &:hover {
    background-color: var(--navbar-hover);
  }
`;
