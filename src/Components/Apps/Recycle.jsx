// Import node_modules
import React from "react";
import styled from "styled-components";

// Import icons
import ChromeIcon from "./../../Assets/Icons/Chrome.png";
import CalculatorIcon from "./../../Assets/Icons/Calculator.png";
import VscodeIcon from "./../../Assets/Icons/Visual.svg";
import RecycleIcon from "./../../Assets/Icons/Recycle.png";
import KSJaayIcon from "./../../Assets/Icons/KSJaay.png";
import TerminalIcon from "./../../Assets/Icons/Terminal.png";
import FolderIcon from "./../../Assets/Icons/Folder.png";
import FullFolderIcon from "./../../Assets/Icons/FullFolder.png";
import NotepadIcon from "./../../Assets/Icons/Notepad.png";
import ReactIcon from "./../../Assets/Icons/React.svg";
import GithubIcon from "./../../Assets/Icons/GithubDesktop.png";

// Assign icons to file names
const icons = {
  recycle_bin: RecycleIcon,
  google_chrome: ChromeIcon,
  github: GithubIcon,
  visual_studio: VscodeIcon,
  calculator: CalculatorIcon,
  ksjaay: KSJaayIcon,
  terminal: TerminalIcon,
  folder: FolderIcon,
  fullFolder: FullFolderIcon,
  file: NotepadIcon,
  react: ReactIcon,
  "react file": ReactIcon,
};

// Basic recycle bin
const Recycle = ({ data }) => {
  return (
    <Container>
      <Header>
        <Button onClick={() => data.restoreRecycle()}>Restore</Button>
        <Button onClick={() => data.deleteRecycle()}>Delete</Button>
      </Header>
      <Content
        style={
          data.recycle.length > 0
            ? {}
            : { justifyContent: "center", display: "flex", marginTop: "20px" }
        }
      >
        {data.recycle.length < 1 ? "Recycle bin is empty." : null}
        <ItemsContainer>
          {data.recycle.length < 1
            ? null
            : data.recycle.map((item, index) => (
                <DesktopItems tabIndex={`${index}`} key={index} id={item.name}>
                  <DesktopIcon
                    src={
                      item.id === "folder" && item.content.length > 0
                        ? icons["fullFolder"]
                        : icons[item.id]
                    }
                    draggable={false}
                    id={item.name}
                  />
                  <DesktopItemName id={item.name}>{item.name}</DesktopItemName>
                </DesktopItems>
              ))}
        </ItemsContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Button = styled.div`
  padding: 8px 12px;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }
`;

const Content = styled.div`
  flex: 1;
  display: grid;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  max-height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: auto;
`;

const DesktopItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 95px;
  padding: 5px;
  border-radius: 5px;
  margin: 3px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight}22;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.highlight}66;
  }
`;

const DesktopIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const DesktopItemName = styled.div`
  font-size: 12px;
  text-align: center;
  padding-top: 3px;
`;

export default Recycle;
