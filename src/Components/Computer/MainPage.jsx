// Code on this page got big so quick I can't filter until the next version

// Import node_modules
import React from "react";
import styled from "styled-components";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

// Import components
import { WindowsNavbar } from "./Navbar";
import { NavMenu } from "./NavMenuBlocks";
import { Desktop } from "./Desktop";
import { Context } from "./Helpers/Context";
import BSOD from "./BSOD";
import CreateItem from "./Helpers/CreateItem";
import CreateInFolder from "./Helpers/CreateInFolder";

// Import css
import "./../../Assets/CSS/MyComputer.css";

// Import image
import WindowsLogo from "./../../Assets/Icons/Windows.svg";
import WindowsLoading from "./../../Assets/Icons/WindowsLoading.svg";
import NormalBackground from "./../../Assets/Icons/NormalBackground.jpg";

// Import backgrounds
import Windows from "./../../Assets/Images/Backgrounds/Windows.jpg";
import WindowsDumb from "./../../Assets/Images/Backgrounds/WindowsDumb.jpg";
import Desert from "./../../Assets/Images/Backgrounds/Desert.webp";

// Different types of wallpapers
let wallpapers = {
  desert: Desert,
  windows: Windows,
  windows_meme: WindowsDumb,
};

// Default items available for the user
let items = [
  { name: "Recycle Bin", content: [], id: "recycle_bin" },
  { name: "Google Chrome", id: "google_chrome" },
  { name: "Github", id: "github" },
  { name: "Visual Studio Code", id: "visual_studio" },
  { name: "Calculator", id: "calculator" },
  { name: "KSJaay", id: "ksjaay" },
  { name: "Terminal", id: "terminal" },
];

export class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Time used to update the current time desktop, calendar, etc...
      time: moment().format("HH:mm"),
      date: moment().format("DD/MM/YYYY"),
      fullDate: moment().format("LL"),
      seconds: moment().format("HH:mm:ss"),
      calendar: new window.Date(),
      // Loop for 1 second to update the time on the desktop
      timeLoop: null,
      // If user reached blue screen of death
      bsod: false,
      // If page has loaded and it's current position
      page: { isLoading: true, imageUrl: "", visibility: "visible" },
      // Check if sections of the navbar is currently visible
      navbar: {
        time: false,
        language: false,
        wifi: false,
        volume: false,
        hidden: false,
        startup: false,
      },
      // Value in navbar search
      startupValue: "",
      // Currently active components
      components: [],
      // Currently shown applications on desktop, recycle bin, and current wallpaper
      data: { desktop: [], recycle: [], wallpaper: "desert" },
      // If user is currently creating a new item
      createItem: null,
      // If user is currently creating a new item in a folder
      folder: { open: false },
    };
  }

  componentDidMount() {
    // Event listener for all clicks on page
    document.addEventListener("click", this.handleClick, false);

    // Intial loading screen timeout
    setTimeout(() => {
      let obj = {
        isLoading: false,
        imageUrl: NormalBackground,
        visibility: "visible",
      };
      // Set page to loaded and wallpaper to active
      return this.setState({ page: obj });
    }, 1500);

    // Loop for time in navbar and sections in calendar
    let timeLoop = setInterval(() => {
      let time = moment().format("HH:mm");
      let seconds = moment().format("HH:mm:ss");
      let date = moment().format("DD/MM/YYYY");
      let fullDate = moment().format("LL");
      if (time !== this.state.time || date !== this.state.date) {
        this.setState({ time: time, date: date, fullDate: fullDate });
      }
      this.setState({ seconds: seconds });
    }, 1000);

    // Fetch local storage from computer
    let localStorage = window.localStorage.getItem("ksjaay_desktop");

    // If local storage is empty, create a new one and load into state
    if (!localStorage) {
      let localStorage = {
        wallpaper: "desert",
        desktop: [
          { name: "Recycle Bin", content: [], id: "recycle_bin" },
          { name: "Google Chrome", id: "google_chrome" },
          { name: "Visual Studio Code", id: "visual_studio" },
          { name: "Github Desktop", id: "github" },
          { name: "Calculator", id: "calculator" },
          { name: "KSJaay", id: "ksjaay" },
          { name: "Terminal", id: "terminal" },
        ],
        recycle: [],
      };
      window.localStorage.setItem(
        "ksjaay_desktop",
        JSON.stringify(localStorage)
      );
      this.setState({ timeLoop: timeLoop, data: localStorage });
    } else {
      this.setState({ timeLoop: timeLoop, data: JSON.parse(localStorage) });
    }
  }

  // Handler for all clicks
  handleClick = (e) => {
    // If loading screen is click then remove screen
    if (e.target.id === "loadingScreenClick") {
      let obj = {
        isLoading: false,
        imageUrl: this.state.page.imageUrl,
        visibility: "hidden",
      };
      setTimeout(() => {
        this.setState({ page: obj });
      }, 300);
      // Following if functions are for the navbar to show different components
    } else if (e.target.id === "timeButton") {
      let obj = {
        time: !this.state.navbar.time,
        language: false,
        wifi: false,
        volume: false,
        hidden: false,
        startup: false,
      };
      this.setState({ calendar: new window.Date(), navbar: obj });
    } else if (
      e.path.filter((x) => {
        if (
          x.className &&
          x.className.length > 0 &&
          x.className.includes("react-calendar")
        ) {
          return x;
        }
      }).length > 0 ||
      e.target.id.includes("calendar")
    ) {
      let obj = {
        time: true,
        language: false,
        wifi: false,
        volume: false,
        hidden: false,
        startup: false,
      };
      this.setState({ navbar: obj });
    } else if (
      e.target.id === "languageButton" ||
      e.target.id.includes("lang")
    ) {
      if (e.target.id !== "languageButton") return;
      let obj = {
        time: false,
        language: !this.state.navbar.language,
        wifi: false,
        volume: false,
        hidden: false,
        startup: false,
      };
      this.setState({ navbar: obj });
    } else if (e.target.id === "wifiButton" || e.target.id.includes("wifi")) {
      if (e.target.id !== "wifiButton") return;
      let obj = {
        time: false,
        language: false,
        wifi: !this.state.navbar.wifi,
        volume: false,
        hidden: false,
        startup: false,
      };
      return this.setState({ navbar: obj });
    } else if (
      e.target.id === "volumeButton" ||
      e.target.id.includes("volume") ||
      (e.target.classList &&
        (e.target.classList.contains("MuiSlider-root") ||
          e.target.classList.contains("MuiSlider-thumb") ||
          e.target.classList.contains("MuiSlider-rail")))
    ) {
      if (e.target.id !== "volumeButton") return;
      let obj = {
        time: false,
        language: false,
        wifi: false,
        volume: !this.state.navbar.volume,
        hidden: false,
        startup: false,
      };
      return this.setState({ navbar: obj });
    } else if (e.target.id === "hiddenButton") {
      let obj = {
        time: false,
        language: false,
        wifi: false,
        volume: false,
        hidden: !this.state.navbar.hidden,
        startup: false,
      };
      return this.setState({ navbar: obj });
    } else if (
      e.target.id === "startupButton" ||
      e.target.id.includes("startup")
    ) {
      if (e.target.id === "startupInput") {
        let obj = {
          time: false,
          language: false,
          wifi: false,
          volume: false,
          hidden: false,
          startup: true,
        };
        return this.setState({ navbar: obj });
      }
      if (e.target.id !== "startupButton") return;
      let obj = {
        time: false,
        language: false,
        wifi: false,
        volume: false,
        hidden: false,
        startup: !this.state.navbar.startup,
      };
      this.setState({ navbar: obj });
    } else {
      let obj = {
        time: false,
        language: false,
        wifi: false,
        volume: false,
        hidden: false,
        startup: false,
      };
      return this.setState({ calendar: new window.Date(), navbar: obj });
    }
  };

  // Open the selected application
  openModal = (id, folder) => {
    let itemsComps =
      this.state.components.map((x) => {
        x.isFocused = false;
        return x;
      }) || [];
    if (itemsComps.filter((x) => x.name === id).length > 0) {
      let arrId = itemsComps.map((y) => y.name);
      let arrIndex = arrId.indexOf(id);
      if (arrIndex < 0) return;
      if (itemsComps[arrIndex].minimized === true) {
        itemsComps[arrIndex].minimized = false;
        itemsComps[arrIndex].isFocused = true;
      }
      return this.setState({ components: itemsComps });
    }

    let item;
    if (folder) {
      let folderNames = this.state.data.desktop.map((x) => x.name);
      if (folderNames.includes(folder)) {
        let folderIndex = folderNames.indexOf(folder);
        let folderFiles = this.state.data.desktop[folderIndex].content.filter(
          (x) => x.name === id
        );
        if (folderFiles[0]) {
          item = folderFiles[0];
        }
      }
    } else {
      item = this.state.data.desktop.filter((x) => x.name === id)[0];
    }
    if (item) {
      itemsComps.push({
        ...item,
        ...{ minimized: false, maximized: false, isFocused: true },
      });
    } else {
      let orginialList = itemsComps.map((x) => x.name);
      if (orginialList.indexOf(id) > -1) {
        itemsComps.push({
          ...items[orginialList.indexOf(id)],
          ...{ minimized: false, maximized: false, isFocused: true },
        });
      }
    }
    this.state.components = itemsComps;
  };

  // Close the currrent application
  closeModal = async (id) => {
    let items = this.state.components;
    let newitems = items.filter((x) => x.name !== id);
    this.state.components = newitems;
    this.setState({ components: newitems });
  };

  // Maximize the current application
  maximizeWindow = (id) => {
    let items = this.state.components;
    let newItems = items.map((item) => {
      if (item.name === id) {
        item.maximized = !item.maximized;
        item.isFocused = true;
      }
      return item;
    });
    this.setState({ components: newItems });
  };

  // Minimize the current application
  minimizeWindow = (id) => {
    let items = this.state.components;
    let newItems = items.map((item) => {
      if (item.name === id) {
        if (!item.minimized === false) {
          item.isFocused = true;
        }
        if (item.isFocused === false && item.minimized === false) {
          item.isFocused = true;
        } else if (item.minimized === true) {
          item.minimized = false;
        } else if (item.minimized === false) {
          item.minimized = true;
        }
      } else {
        item.isFocused = false;
      }
      return item;
    });
    this.setState({ components: newItems });
  };

  // Move the current application to front
  focusWindow = (id) => {
    let items = this.state.components;
    let newItems = items.map((item) => {
      item.isFocused = false;
      if (item.name === id && item.minimized === false) {
        item.isFocused = true;
      }
      return item;
    });
    this.setState({ components: newItems });
  };

  // Set blue screen of death
  bsod = () => {
    this.setState({ bsod: true });
  };

  // Delete an item outside of folder (with some extra easter eggs)
  deleteItem = (id) => {
    if (id === "Recycle Bin") {
      return this.setState({ bsod: true });
    }
    let fullItemList = this.state.data.desktop;
    let titleIds = fullItemList.map((x) => x.name);
    let index = titleIds.indexOf(id);
    if (index < 0) {
      return;
    }
    let recycle = this.state.data.recycle;
    recycle.push(fullItemList[index]);
    fullItemList.splice(index, 1);
    window.localStorage.setItem(
      "ksjaay_desktop",
      JSON.stringify({
        desktop: fullItemList,
        recycle: recycle,
        wallpaper: this.state.data.wallpaper,
      })
    );
    return this.setState({
      data: {
        desktop: fullItemList,
        recycle: recycle,
        wallpaper: this.state.data.wallpaper,
      },
    });
  };

  // Restore items from the recycle bin
  restoreRecycle = () => {
    let recycleItems = this.state.data.recycle.reverse();
    let restoredItems = [];
    let currentDesktop = this.state.data.desktop.map((x) =>
      x.name.toLowerCase()
    );
    for (let i = 0; i < recycleItems.length; i++) {
      if (recycleItems[i].folder) {
        let folderIndex = this.state.data.desktop
          .map((x) => x.name)
          .indexOf(recycleItems[i].folder);
        if (folderIndex > -1) {
          this.state.data.desktop[folderIndex].content.push(recycleItems[i]);
        }
      } else if (!currentDesktop.includes(recycleItems[i].name.toLowerCase())) {
        restoredItems.push(recycleItems[i]);
      }
    }
    let fullList = [...this.state.data.desktop, ...restoredItems];
    window.localStorage.setItem(
      "ksjaay_desktop",
      JSON.stringify({
        desktop: fullList,
        recycle: [],
        wallpaper: this.state.data.wallpaper,
      })
    );
    return this.setState({
      data: {
        desktop: fullList,
        recycle: [],
        wallpaper: this.state.data.wallpaper,
      },
    });
  };

  // Delete all items from the recycle bin
  deleteRecycle = () => {
    window.localStorage.setItem(
      "ksjaay_desktop",
      JSON.stringify({
        desktop: this.state.data.desktop,
        recycle: [],
        wallpaper: this.state.data.wallpaper,
      })
    );
    return this.setState({
      data: {
        desktop: this.state.data.desktop,
        recycle: [],
        wallpaper: this.state.data.wallpaper,
      },
    });
  };

  // Open menu for creating a file outside of folder
  openItemMenu = (type) => {
    return this.setState({ createItem: type });
  };

  // Open menu for creating a file inside of a folder
  openMenuInFolder = (folder, type) => {
    return this.setState({ folder: { name: folder, file: type, open: true } });
  };

  // Create new item inside a folder
  newItemInFolder = (name, type, folder) => {
    let data = this.state.data;
    let directories = data.desktop.map((x) => x.name);
    let index = directories.indexOf(folder);
    if (index > -1) {
      if (data.desktop[index].id !== "folder") {
        return this.setState({ folder: { open: false } });
      }
      let fileType = type.toLowerCase() === "file" ? "file" : "react";
      data.desktop[index].content.push({
        name: name,
        folder: data.desktop[index].name,
        content: "",
        id: fileType,
      });
      window.localStorage.setItem("ksjaay_desktop", JSON.stringify(data));
      return this.setState({ folder: { open: false }, data: data });
    }
    return this.setState({ folder: { open: false } });
  };

  // Update the file contents
  updateFile = (file) => {
    let data = this.state.data;
    if (!file.folder) {
      let files = data.desktop.map((y) => y.name);
      let index = files.indexOf(file.name);
      if (index > -1) {
        if (
          data.desktop[index].id?.toLowerCase() === "file" ||
          data.desktop[index].id?.toLowerCase() === "react" ||
          data.desktop[index].id?.toLowerCase() === "react file"
        ) {
          data.desktop[index] = file;
          window.localStorage.setItem("ksjaay_desktop", JSON.stringify(data));
          return this.setState({ data: data });
        }
      }
    }
    let directories = data.desktop.map((x) => x.name);
    let index = directories.indexOf(file.folder);
    if (index > -1) {
      if (data.desktop[index].id !== "folder") return;
      let files = data.desktop[index].content.map((x) => x.name);
      let fileIndex = files.indexOf(file.name);
      if (fileIndex > -1) {
        data.desktop[index].content[fileIndex] = file;
        window.localStorage.setItem("ksjaay_desktop", JSON.stringify(data));
        return this.setState({ data: data });
      }
    }
  };

  // Close the folder menu
  closeInFolderMenu = () => {
    return this.setState({ folder: { open: false } });
  };

  // Create a new item outside of a folder
  newItem = (name, type) => {
    let data = this.state.data;
    let availableItems = items.map((x) => x.name.toLowerCase());
    let index = availableItems.indexOf(name.toLowerCase());
    if (index > -1) {
      data.desktop.push(items[index]);
      window.localStorage.setItem("ksjaay_desktop", JSON.stringify(data));
      return this.setState({ createItem: false });
    }
    if (
      type.toLowerCase() === "file" ||
      type.toLowerCase() === "react" ||
      type.toLowerCase() === "react file"
    ) {
      data.desktop.push({ name: name, content: "", id: type.toLowerCase() });
    } else {
      data.desktop.push({ name: name, content: [], id: type.toLowerCase() });
    }
    window.localStorage.setItem("ksjaay_desktop", JSON.stringify(data));
    return this.setState({ createItem: false });
  };

  // Delete item inside a folder
  deleteItemInFolder = (file, folder) => {
    let folders = this.state.data.desktop;
    let index = folders.map((x) => x.name).indexOf(folder);
    if (index > -1) {
      let fileIndex = folders[index].content.map((x) => x.name).indexOf(file);
      if (fileIndex > -1) {
        let newRecycle = this.state.data.recycle.push(
          folders[index].content[fileIndex]
        );
        let newFolders = folders[index].content.splice(fileIndex, 1);
        this.setState({
          desktop: newFolders,
          recycle: newRecycle,
          wallpaper: this.state.data.wallpaper,
        });
        return window.localStorage.setItem(
          "ksjaay_desktop",
          JSON.stringify({
            desktop: folders,
            recycle: this.state.data.recycle,
            wallpaper: this.state.data.wallpaper,
          })
        );
      }
    }
  };

  // Close menu for creating item
  closeMenu = () => {
    return this.setState({ createItem: null });
  };

  // Reset windows back to normal state (in local storage as well)
  resetWindows = () => {
    let localStorage = {
      wallpaper: "desert",
      desktop: [
        { name: "Recycle Bin", content: [], id: "recycle_bin" },
        { name: "Google Chrome", id: "google_chrome" },
        { name: "Visual Studio Code", id: "visual_studio" },
        { name: "Github Desktop", id: "github" },
        { name: "Calculator", id: "calculator" },
        { name: "KSJaay", id: "ksjaay" },
        { name: "Terminal", id: "terminal" },
      ],
      recycle: [],
    };
    window.localStorage.setItem("ksjaay_desktop", JSON.stringify(localStorage));
    this.setState({
      data: localStorage,
      page: {
        isLoading: true,
        imageUrl: this.state.page.imageUrl,
        visibility: "visible",
      },
      bsod: false,
      navbar: {
        time: false,
        language: false,
        wifi: false,
        volume: false,
        hidden: false,
        startup: false,
      },
      startupValue: "",
      components: [],
      createItem: null,
      folder: { open: false },
    });
    setTimeout(async () => {
      let obj = {
        isLoading: false,
        imageUrl: this.state.page.imageUrl,
        visibility: "visible",
      };
      return this.setState({ page: obj });
    }, 1000);
  };

  // Update start menu input
  updateStartupInput = (value) => {
    return this.setState({ startupValue: value });
  };

  // Remove click listener and clearInterval for timer
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
    clearInterval(this.state.timeLoop);
  }

  render() {
    if (this.state.page.isLoading === true) {
      return (
        <LoadingContainer>
          <LoadingImage src={WindowsLogo} />
          <LoadingIcon src={WindowsLoading} />
        </LoadingContainer>
      );
    } else if (this.state.bsod === true) {
      return (
        <Container>
          <BSOD />
        </Container>
      );
    } else {
      return (
        <Container
          style={{
            backgroundImage: `url(${wallpapers[this.state.data.wallpaper]})`,
            backgroundSize: "100%",
          }}
        >
          <ImageWaitContainer
            style={{
              visibility: this.state.page.visibility,
              opacity: this.state.page.visibility === "hidden" ? 0 : 1,
            }}
            id="loadingScreenClick"
            draggable={false}
          >
            <WaitingImage
              src={this.state.page.imageUrl}
              id="loadingScreenClick"
              draggable={false}
            />
            <WaitingTextContainer id="loadingScreenClick">
              <WaitingTextTime id="loadingScreenClick">
                {this.state.time}
              </WaitingTextTime>
              <WaitingTextDate id="loadingScreenClick">
                {this.state.fullDate}
              </WaitingTextDate>
            </WaitingTextContainer>
          </ImageWaitContainer>

          <Context
            desktop={this.state.data.desktop}
            deleteItem={this.deleteItem}
            deleteItemInFolder={this.deleteItemInFolder}
            resetWindows={this.resetWindows}
            openModal={this.openModal}
            openItemMenu={this.openItemMenu}
            openMenuInFolder={this.openMenuInFolder}
          />
          <CreateItem
            data={this.state.data}
            createItem={this.newItem}
            closeMenu={this.closeMenu}
            type={this.state.createItem}
          />
          <CreateInFolder
            data={this.state.data}
            createItem={this.newItemInFolder}
            closeMenu={this.closeInFolderMenu}
            info={this.state.folder}
          />
          <Desktop
            modals={this.state.components}
            data={this.state.data}
            openModal={this.openModal}
            createFolder={this.newItem}
            closeModal={this.closeModal}
            maximizeWindow={this.maximizeWindow}
            minimizeWindow={this.minimizeWindow}
            focusWindow={this.focusWindow}
            restoreRecycle={this.restoreRecycle}
            deleteRecycle={this.deleteRecycle}
            updateFile={this.updateFile}
          />
          <NavMenu state={this.state} />
          <NavbarContainer>
            <WindowsNavbar
              time={this.state.time}
              date={this.state.date}
              components={this.state.components}
              minimizeWindow={this.minimizeWindow}
              updateStartupInput={this.updateStartupInput}
            />
          </NavbarContainer>
        </Container>
      );
    }
  }
}

const LoadingContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.img`
  min-width: 100px;
  min-height: 100px;
  width: 7%;
  height: 7%;
`;

const LoadingIcon = styled.img`
  font-family: "Exo", sans-serif;
  color: white;
  margin: 40px 0 0 0;
  font-size: 22px;
  width: 120px;
  height: 120px;
`;

const ImageWaitContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: hidden;
  position: absolute;
  transition: all 500ms;
`;

const WaitingImage = styled.img`
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
`;

const WaitingTextContainer = styled.div`
  position: absolute;
  color: white;
  margin-bottom: 60px;
  margin-left: 30px;
  font-weight: 400;
`;

const WaitingTextTime = styled.div`
  font-size: 6em;
  margin: 0;
`;

const WaitingTextDate = styled.div`
  font-size: 4em;
  font-weight: 200;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: ${(props) => props.theme.colors.font};
  font-family: "Exo", sans-serif;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-size: cover;
`;

const NavbarContainer = styled.div`
  width: 100vw;
  height: 48px;
  background-color: ${(props) => props.theme.colors.secondary}99;
  display: flex;
`;
