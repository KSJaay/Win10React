// Import node_modules
import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

// Import Applications
import Calculator from "./../Apps/Calculator";
import Google from "./../Apps/Google";
import KSJaay from "./../Apps/KSJaay";
import Recycle from "./../Apps/Recycle";
import Terminal from "./../Apps/Terminal";
import Github from "./../Apps/Github";
import Folder from "./../Apps/Folder";
import TextEditor from "./../Apps/TextEditor";
import VsEditor from "./../Apps/Editor";

// Import icons
import { BiSquare, BiMinus } from "react-icons/bi";
import { VscChromeClose, VscChromeRestore } from "react-icons/vsc";

// Functions for each app
const apps = {
  recycle_bin: function (content, data) {
    return <Recycle data={data} />;
  },
  google_chrome: function (content, data) {
    return <Google data={data} />;
  },
  github: function (content, data) {
    return <Github data={data} />;
  },
  visual_studio: function () {
    return <VsEditor />;
  },
  calculator: function () {
    return <Calculator />;
  },
  ksjaay: function (content, data) {
    return <KSJaay data={data} />;
  },
  terminal: function (
    content,
    data,
    createFolder,
    updateFile,
    openModal,
    openTerminalModal,
    closeModal
  ) {
    return (
      <Terminal
        data={data}
        closeModal={closeModal}
        createFolder={createFolder}
        openTerminalModal={openTerminalModal}
      />
    );
  },
  folder: function (content, data, createFolder, updateFile, openModal) {
    return <Folder content={content} openModal={openModal} />;
  },
  file: function (content, data, createFolder, updateFile) {
    return <TextEditor content={content} updateFile={updateFile} />;
  },
  react: function (content, data, createFolder, updateFile) {
    return <VsEditor content={content} updateFile={updateFile} />;
  },
  "react file": function (content, data, createFolder, updateFile) {
    return <VsEditor content={content} updateFile={updateFile} />;
  },
};

// Update the position of the component
const UpdatePosition = (component) => {
  let elem = document.getElementById(component.name);
  if (component.maximized === false) {
    let posXY = elem.style.getPropertyValue("--modal-transform");
    elem.style.transform = posXY;
  } else {
    elem.style.setProperty("--modal-transform", elem.style.transform);
    elem.style.transform = `translate(0pt,0pt)`;
  }
};

const Modal = ({
  component,
  closeModal,
  maximizeWindow,
  minimizeWindow,
  focusWindow,
  data,
  createFolder,
  updateFile,
  openModal,
  openTerminalModal,
}) => {
  // Check if the component is in focus, if so bring zIndex to front
  let zindex =
    component.isFocused === true ? { zIndex: "30" } : { zIndex: "20" };

  // Change the size of the component based on if it is maximized or not
  let size =
    component.maximized === true
      ? {
          top: "0",
          left: "0",
          position: "absolute",
          width: "100%",
          height: "calc(100% - 48px)",
          borderRadius: "0px",
        }
      : { height: "80%", width: "70%", borderRadius: "5px" };

  // Check if the component is minimized or not and change opacity accordingly
  let minimize =
    component.minimized === true
      ? { opacity: 0, width: "0px", height: "0px" }
      : { opacity: 1 };

  // Adding a custom opacity for terminal
  let opacity =
    component.id === "terminal" && component.minimized === false
      ? { opacity: 0.9 }
      : component.minimized === true
      ? { opacity: 0 }
      : { opacity: 1 };

  return (
    <Draggable bounds="parent" handle=".window-title">
      <Container
        draggable={false}
        style={{ ...zindex, ...size, ...minimize, ...opacity }}
        id={component.name}
        onTouchStart={focusWindow}
        onClick={focusWindow}
      >
        <Header
          className="window-title"
          style={
            component.maximized === true
              ? { borderRadius: "0px" }
              : { borderRadius: "5px 5px 0px 0px" }
          }
          onClick={focusWindow}
        >
          <Title onTouchStart={focusWindow} onClick={focusWindow}>
            {component.name}
          </Title>
          <MinimizeButton
            onTouchStart={minimizeWindow}
            onClick={minimizeWindow}
          >
            <BiMinus />
          </MinimizeButton>
          <MaximizeButton
            onTouchStart={() => [maximizeWindow(), UpdatePosition(component)]}
            onClick={() => [maximizeWindow(), UpdatePosition(component)]}
          >
            {component.maximized === true ? <VscChromeRestore /> : <BiSquare />}
          </MaximizeButton>
          <CloseButton onTouchStart={closeModal} onClick={closeModal}>
            <VscChromeClose />
          </CloseButton>
        </Header>
        <Content>
          {apps[component.id](
            component,
            data,
            createFolder,
            updateFile,
            openModal,
            openTerminalModal,
            closeModal
          )}
        </Content>
      </Container>
    </Draggable>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: fixed;
  width: 70%;
  height: 80%;
  left: 15%;
  top: calc(10% - 40px);
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  transition: height 300ms, width 300ms, opacity 250ms;
`;

const Header = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.highlight}cc;
`;

const Title = styled.div`
  flex: 1;
  padding: 5px 8px;
  font-weight: 600;
`;

const CloseButton = styled.div`
  padding: 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  &:hover {
    background-color: #e61531;
  }
`;

const MaximizeButton = styled.div`
  padding: 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;

const MinimizeButton = styled.div`
  padding: 5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
`;

export default Modal;
