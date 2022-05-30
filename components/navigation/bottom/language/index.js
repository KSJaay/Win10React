import styled from "styled-components";

export default function Language() {
  return <Content>ENG</Content>;
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
  padding: 0 5px;

  &:hover {
    background-color: var(--navbar-hover);
  }
`;
