import styled from "styled-components";

export default function SearchBar() {
  return <Content placeholder="Type here to search" />;
}

const Content = styled.input`
  width: 320px;
  height: 40px;
  transition: 500ms;
  padding: 2px 6px;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  border: 2px solid #454a53;
  background-color: var(--light-color);
  color: var(--font-color);

  &:focus {
    transition: 500ms;
    outline: none;
    border: 2px solid var(--highlight-color);
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
