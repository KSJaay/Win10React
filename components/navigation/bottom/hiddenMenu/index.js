import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

export default function Hidden() {
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

const Logo = styled(IoIosArrowUp)`
  width: 20px;
  height: 20px;
  color: var(--font-color);
`;
