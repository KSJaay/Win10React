import { useRef, useEffect } from "react";
import styled from "styled-components";
import WindowsIcon from "./windows.js";

export default function WindowsLogo() {
  const ContentRef = useRef();
  const SvgRef = useRef();

  useEffect(() => {
    const hoverHandler = (e) => {
      if (e.type === "mouseenter") {
        SvgRef.current.style.fill = "#00ADEF";
      } else {
        SvgRef.current.style.fill = "#fff";
      }
    };

    ContentRef.current.addEventListener("mouseenter", hoverHandler);
    SvgRef.current.addEventListener("mouseenter", hoverHandler);
    ContentRef.current.addEventListener("mouseleave", hoverHandler);
  }, []);
  return (
    <Content ref={ContentRef}>
      <WindowsIcon fill={"white"} svgRef={SvgRef} width={"18"} height={"18"} />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  &:hover {
    background-color: var(--navbar-hover);
  }
`;
