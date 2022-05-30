import styled from "styled-components";
import { FiVolume2 } from "react-icons/fi";

export default function Volume() {
  return (
    <Content>
      <Logo />
    </Content>
  );
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

const Logo = styled(FiVolume2)`
  width: 22px;
  height: 22px;
  color: var(--font-color);
`;
