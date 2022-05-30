import styled from "styled-components";

export default function Wifi() {
  return (
    <Content>
      <Logo src={"/icons/Windows/Wifi.png"} />
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

const Logo = styled.img`
  width: 18px;
  height: 18px;
`;
