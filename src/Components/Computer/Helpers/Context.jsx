// Import node_modules
import React from "react";
import styled from "styled-components";

export class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contextMenu: false,
      helpMenu: false,
      folderMenu: false,
      folderName: "",
      delete: false,
      deleteID: "",
      deleteInFolder: false,
      deleteFolder: { file: "", folder: "" },
    };
  }

  async componentDidMount() {
    // Function used to set listeners for contextmenu (right click) and all other clicks
    this.setContextListeners();
  }
  async componentWillUnmount() {
    // Function used to emove listeners for contextmenu (right click) and all other clicks
    this.removeContextListeners();
  }

  setContextListeners = () => {
    document.addEventListener("contextmenu", this.checkContextMenu);
    document.addEventListener("click", this.hideAllContextMenu);
  };

  removeContextListeners = () => {
    document.removeEventListener("contextmenu", this.checkContextMenu);
    document.removeEventListener("click", this.hideAllContextMenu);
  };

  checkContextMenu = (e) => {
    e.preventDefault();
    this.hideAllContextMenu();
    this.showContextMenu(e);
  };

  showContextMenu = (e) => {
    // Show custom right click menu depending on type of area user is clicking in
    let posx = e.clientX || e.pageX || e.x;
    let posy = e.clientY || e.pageY || e.y;
    let contextMenu;
    if (e.target.dataset.context === "Desktop-area") {
      contextMenu = document.getElementById(`default-menu`);
    } else if (
      e.target.dataset.context &&
      e.target.dataset.context.startsWith("Folder")
    ) {
      contextMenu = document.getElementById(`folder-menu`);
    } else if (e.target.id && e.target.id.startsWith("file-")) {
      contextMenu = document.getElementById(`folder-menu`);
    } else {
      contextMenu = document.getElementById(`help-menu`);
    }
    if (posx + 275 > window.innerWidth) posx -= 250;
    if (posy + 275 > window.innerHeight) posy -= 250;

    posx = posx.toString() + "px";
    posy = posy.toString() + "px";
    contextMenu.style.left = posx;
    contextMenu.style.top = posy;

    if (e.target.dataset.context === "Desktop-area") {
      this.setState({
        contextMenu: !this.state.contextMenu,
        helpMenu: false,
        folderMenu: false,
        folderName: "",
        delete: false,
        deleteID: "",
        deleteInFolder: false,
        deleteFolder: { file: "", folder: "" },
      });
    } else if (
      e.target.dataset.context &&
      e.target.dataset.context.startsWith("Folder")
    ) {
      let name = e.target.dataset.context.replace("Folder-", "");
      this.setState({
        contextMenu: false,
        helpMenu: false,
        folderMenu: !this.state.folderMenu,
        folderName: name,
        delete: false,
        deleteID: "",
        deleteInFolder: false,
        deleteFolder: { file: "", folder: "" },
      });
    } else if (e.target.id && e.target.id.startsWith("file-")) {
      let args = e.target.id.replace("file-", "").split("-folder-");
      let file = args[0];
      let folder = args[1];
      if (file && folder) {
        this.setState({
          contextMenu: false,
          helpMenu: false,
          folderMenu: !this.state.folderMenu,
          folderName: null,
          delete: false,
          deleteID: "",
          deleteInFolder: true,
          deleteFolder: { file: file, folder: folder },
        });
      } else {
        this.setState({
          contextMenu: false,
          helpMenu: false,
          folderMenu: !this.state.folderMenu,
          folderName: null,
          delete: false,
          deleteID: "",
          deleteInFolder: false,
          deleteFolder: { file: "", folder: "" },
        });
      }
    } else {
      let item = this.props.desktop.filter((x) => x.name === e.target.id);
      if (item[0]) {
        return this.setState({
          contextMenu: false,
          helpMenu: !this.state.helpMenu,
          folderMenu: false,
          folderName: "",
          delete: true,
          deleteID: item[0].name,
          deleteInFolder: false,
          deleteFolder: { file: "", folder: "" },
        });
      } else {
        return this.setState({
          contextMenu: false,
          helpMenu: !this.state.helpMenu,
          folderMenu: false,
          folderName: "",
          delete: false,
          deleteID: "",
          deleteInFolder: false,
          deleteFolder: { file: "", folder: "" },
        });
      }
    }
  };

  // Hide all context menu
  hideAllContextMenu = () => {
    this.setState({
      contextMenu: false,
      helpMenu: false,
      folderMenu: false,
      folderName: null,
      delete: false,
      deleteID: "",
      deleteInFolder: false,
      deleteFolder: { file: "", folder: "" },
    });
  };

  // Get the current position and change location depending on what area user is clicking in
  getMenuPosition = (e) => {
    var posx = 0;
    var posy = 0;

    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return { posx, posy };
  };

  deleteItem = (id) => {
    this.props.deleteItem(id);
  };

  openModal = (id) => {
    this.props.openModal(id);
  };

  goFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  openItemMenu = (type) => {
    this.setState({
      contextMenu: false,
      helpMenu: false,
      folderMenu: false,
      folderName: null,
      delete: false,
      deleteID: "",
      deleteInFolder: false,
      deleteFolder: { file: "", folder: "" },
    });
    return this.props.openItemMenu(type);
  };

  openMenuInFolder = (type) => {
    this.setState({
      contextMenu: false,
      helpMenu: false,
      folderMenu: false,
      folderName: null,
      delete: false,
      deleteID: "",
      deleteInFolder: false,
      deleteFolder: { file: "", folder: "" },
    });
    return this.props.openMenuInFolder(this.state.folderName, type);
  };

  deleteItemInFolder = () => {
    this.props.deleteItemInFolder(
      this.state.deleteFolder.file,
      this.state.deleteFolder.folder
    );
    return this.setState({
      contextMenu: false,
      helpMenu: false,
      folderMenu: false,
      folderName: null,
      delete: false,
      deleteID: "",
      deleteInFolder: false,
      deleteFolder: { file: "", folder: "" },
    });
  };

  resetWindows = () => {
    this.props.resetWindows();
    return this.setState({
      contextMenu: false,
      helpMenu: false,
      folderMenu: false,
      folderName: null,
      delete: false,
      deleteID: "",
      deleteInFolder: false,
      deleteFolder: { file: "", folder: "" },
    });
  };

  render() {
    return (
      <>
        <Container
          id="default-menu"
          style={
            this.state.contextMenu === true
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <Item onClick={() => this.openItemMenu("File")}>New File</Item>
          <Item onClick={() => this.openItemMenu("Folder")}>New Folder</Item>
          <Item onClick={() => this.openItemMenu("React file")}>
            New React File
          </Item>
          <EmptyItem />
          <Item onClick={() => this.openModal("Terminal")}>Open Terminal</Item>
          <EmptyItem />
          <Item>Change Background</Item>
          <Item onClick={() => this.goFullScreen()}>Enter Fullscreen</Item>
          <Item>Settings</Item>
        </Container>

        <Container
          id="folder-menu"
          style={
            this.state.folderMenu === true
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <Item onClick={() => this.openMenuInFolder("File")}>New File</Item>
          <Item onClick={() => this.openMenuInFolder("React file")}>
            New React File
          </Item>
          <EmptyItem />
          <Item href="https://github.com/ksjaay" target="_blank">
            <EmoteContainer>🙋‍♂️</EmoteContainer> Follow me
          </Item>
          <Item href="https://github.com/ksjaay" target="_blank">
            <EmoteContainer>❗</EmoteContainer> Report Bug
          </Item>
          <Item href="https://github.com/ksjaay" target="_blank">
            <EmoteContainer>⭐</EmoteContainer> Star Project
          </Item>
          <EmptyItem />
          <Item>
            <EmoteContainer>📱</EmoteContainer> Contact Me
          </Item>
          <EmptyItem />
          {this.state.deleteInFolder === true ? (
            <Item onClick={() => this.deleteItemInFolder(this.state.deleteID)}>
              <EmoteContainer>🗑️</EmoteContainer> Delete
            </Item>
          ) : (
            <DisabledItem>
              <EmoteContainer>🗑️</EmoteContainer> Delete
            </DisabledItem>
          )}
          <Item onClick={() => this.resetWindows()}>
            <EmoteContainer>💣</EmoteContainer> Reset Windows
          </Item>
        </Container>

        <Container
          id="help-menu"
          style={
            this.state.helpMenu === true
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <Item href="https://github.com/ksjaay" target="_blank">
            <EmoteContainer>🙋‍♂️</EmoteContainer> Follow me
          </Item>
          <Item href="https://github.com/ksjaay" target="_blank">
            <EmoteContainer>❗</EmoteContainer> Report Bug
          </Item>
          <Item href="https://github.com/ksjaay" target="_blank">
            <EmoteContainer>⭐</EmoteContainer> Star Project
          </Item>
          <EmptyItem />
          <Item>
            <EmoteContainer>📱</EmoteContainer> Contact Me
          </Item>
          <EmptyItem />
          {this.state.delete === true ? (
            <Item onClick={() => this.deleteItem(this.state.deleteID)}>
              <EmoteContainer>🗑️</EmoteContainer> Delete
            </Item>
          ) : (
            <DisabledItem>
              <EmoteContainer>🗑️</EmoteContainer> Delete
            </DisabledItem>
          )}
          <Item onClick={() => this.resetWindows()}>
            <EmoteContainer>💣</EmoteContainer> Reset Windows
          </Item>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: "none";
  position: absolute;
  flex-direction: column;
  border-radius: 5px;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Item = styled.a`
  flex: 1;
  padding: 8px 12px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const DisabledItem = styled.a`
  flex: 1;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.colors.light};
  text-decoration: center;
`;

const EmptyItem = styled.div`
  flex: 1;
  margin: 8px 12px;
  border-bottom: 1px solid #a0a0a0;
`;
const EmoteContainer = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
