// Import node_modules
import React from "react";
import styled from "styled-components";

// Import icons
import Recycle from "./../../Assets/Icons/Recycle.png";
import RecycleFull from "./../../Assets/Icons/RecycleFull.png";
import Modal from "./Modal";

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
  file: NotepadIcon,
  react: ReactIcon,
  "react file": ReactIcon,
};

export class Desktop extends React.Component {
  render() {
    // Handler for clicks depending on screen size
    const handleClick = (id, folder) => (e) => {
      if (window.innerWidth < 1000) {
        return this.props.openModal(id, folder);
      }
      if (e.detail === 2) {
        this.props.openModal(id, folder);
      }
    };
    const handleTerminalOpen = (id) => {
      this.props.openModal(id);
    };
    const handleClose = (id) => (e) => {
      this.props.closeModal(id);
    };
    const maximizeWindow = (id) => (e) => {
      this.props.maximizeWindow(id);
    };
    const minimizeWindow = (id) => (e) => {
      this.props.minimizeWindow(id);
    };
    const focusWindow = (id) => (e) => {
      this.props.focusWindow(id);
    };
    const createFolder = (id) => {
      this.props.createFolder(id, "folder");
    };
    const updateFile = (file) => {
      this.props.updateFile(file);
    };
    // Loads the content to current screen
    return (
      <Container data-context="Desktop-area">
        {this.props.modals &&
          this.props.modals.map((item, index) => (
            <Modal
              component={item}
              closeModal={handleClose(item.name)}
              maximizeWindow={maximizeWindow(item.name)}
              minimizeWindow={minimizeWindow(item.name)}
              focusWindow={focusWindow(item.name)}
              data={{
                ...this.props.data,
                ...{ restoreRecycle: this.props.restoreRecycle },
                ...{ deleteRecycle: this.props.deleteRecycle },
              }}
              createFolder={createFolder}
              updateFile={updateFile}
              openModal={handleClick}
              openTerminalModal={handleTerminalOpen}
              key={index}
            />
          ))}
        <ItemsContainer data-context="Desktop-area">
          {this.props.data &&
            this.props.data.desktop.map((item, index) => {
              if (item.name === "Recycle Bin") {
                return (
                  <DesktopItems
                    tabIndex={`${index}`}
                    key={index}
                    onClick={handleClick(item.name)}
                    id={item.name}
                  >
                    {this.props.data &&
                    this.props.data.recycle &&
                    this.props.data.recycle.length > 0 ? (
                      <DesktopIcon
                        src={RecycleFull}
                        draggable={false}
                        id={item.name}
                      />
                    ) : (
                      <DesktopIcon
                        src={Recycle}
                        draggable={false}
                        id={item.name}
                      />
                    )}
                    <DesktopItemName id={item.name}>
                      {item.name}
                    </DesktopItemName>
                  </DesktopItems>
                );
              } else if (item.id === "folder") {
                return (
                  <DesktopItems
                    tabIndex={`${index}`}
                    key={index}
                    onClick={handleClick(item.name)}
                    id={item.name}
                  >
                    {item.content.length > 0 ? (
                      <DesktopIcon
                        src={FullFolderIcon}
                        draggable={false}
                        id={item.name}
                      />
                    ) : (
                      <DesktopIcon
                        src={icons[item.id]}
                        draggable={false}
                        id={item.name}
                      />
                    )}
                    <DesktopItemName id={item.name}>
                      {item.name}
                    </DesktopItemName>
                  </DesktopItems>
                );
              } else {
                return (
                  <DesktopItems
                    tabIndex={`${index}`}
                    key={index}
                    onClick={handleClick(item.name)}
                    id={item.name}
                  >
                    <DesktopIcon
                      src={icons[item.id]}
                      draggable={false}
                      id={item.name}
                    />
                    <DesktopItemName id={item.name}>
                      {item.name}
                    </DesktopItemName>
                  </DesktopItems>
                );
              }
            })}
        </ItemsContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 1;
  display: grid;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  max-height: calc(100vh - 50px);
  overflow: hidden;
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
