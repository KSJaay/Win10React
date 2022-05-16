// Import node_modules
import React from "react";
import styled from "styled-components";

// Import icons
import Windows from "./../../Assets/Icons/Windows.svg";
import { IoIosArrowUp } from "react-icons/io";
import { FiVolume2 } from "react-icons/fi";
import Wifi from "./../../Assets/Icons/Wifi.png";

// Import icons
import ChromeIcon from "./../../Assets/Icons/Chrome.png";
import CalculatorIcon from "./../../Assets/Icons/Calculator.png";
import VscodeIcon from "./../../Assets/Icons/Visual.svg";
import RecycleIcon from "./../../Assets/Icons/Recycle.png";
import KSJaayIcon from "./../../Assets/Icons/KSJaay.png";
import TerminalIcon from "./../../Assets/Icons/Terminal.png";
import FolderIcon from "./../../Assets/Icons/Folder.png";
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

export class WindowsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Check if weather is loaded or not
      weatherLoaded: false,
      // Fake weather data incase it doesn't load from API
      weather: {
        type: "Clear sky",
        icon: "https://openweathermap.org/img/wn/01d.png",
        temp: "12",
      },
    };
  }

  // Function to update the search input
  updateStartupInput = (value) => {
    return this.props.updateStartupInput(value.toLowerCase());
  };

  render() {
    return (
      <Container>
        <NavbarLeft>
          <WindowsIconContainer id="startupButton">
            <WindowsIcon src={Windows} id="startupButton" />
          </WindowsIconContainer>
          <SearchBar
            placeholder="Search..."
            id="startupInput"
            onChange={(e) => this.updateStartupInput(e.target.value)}
          />
        </NavbarLeft>
        <NavbarCenter>
          {this.props.components &&
            this.props.components.map((item, index) => (
              <NavbarOpenIconContainer
                key={index}
                onClick={() => this.props.minimizeWindow(item.name)}
                style={
                  item.isFocused === true ? { backgroundColor: "#333842" } : {}
                }
              >
                <NavbarOpenIcon src={icons[item.id]} />
              </NavbarOpenIconContainer>
            ))}
        </NavbarCenter>
        <NavbarRight>
          <WeatherInfoContainer id="weatherButton">
            <WeatherInfo id="weatherButton">
              <WeatherIcon src={this.state.weather.icon} id="weatherButton" />
              {this.state.weather.temp}°C{" "}
              <WeatherType>{this.state.weather.type}</WeatherType>
            </WeatherInfo>
          </WeatherInfoContainer>
          <HiddenIconContainer id="hiddenButton">
            <IoIosArrowUp
              style={{ width: "20px", height: "20px" }}
              id="hiddenButton"
            />
          </HiddenIconContainer>
          <VolumeIconContainer id="volumeButton">
            <FiVolume2
              style={{ width: "22px", height: "22px" }}
              id="volumeButton"
            />
          </VolumeIconContainer>
          <WifiIconContainer id="wifiButton">
            <WifiIcon src={Wifi} id="wifiButton" />
          </WifiIconContainer>
          <LanguageIconContainer id="languageButton">ENG</LanguageIconContainer>
          <DateTime id="timeButton">
            <Time id="timeButton">{this.props.time}</Time>
            <Date id="timeButton">{this.props.date}</Date>
          </DateTime>
          <CloseBar />
        </NavbarRight>
      </Container>
    );
  }
}

// Styled components
const Container = styled.div`
  width: 100vw;
  display: flex;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.secondary}99;
`;

const NavbarLeft = styled.div`
  display: flex;
`;

const NavbarCenter = styled.div`
  flex: 1;
  display: flex;
  margin-left: 5px;
`;

const NavbarRight = styled.div`
  display: flex;
`;

const NavbarOpenIconContainer = styled.div`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) => props.theme.colors.light}55;
  border-bottom: 2px solid ${(props) => props.theme.colors.highlight};
  margin: 0 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.light}99;
  }
`;

const NavbarOpenIcon = styled.img`
  height: 35px;
  width: auto;
`;

const WindowsIconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const WindowsIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const SearchBar = styled.input`
  width: 320px;
  height: 34px;
  transition: 500ms;
  padding: 5px 10px;
  font-family: "Exo", sans-serif;
  font-size: 14px;
  border: 2px solid #454a53;
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.font};

  &:focus {
    transition: 500ms;
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const CloseBar = styled.div`
  height: 48px;
  width: 5px;
  border-left: 1px solid #454a53;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const Date = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VolumeIconContainer = styled.div`
  height: 48px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const WifiIconContainer = styled.div`
  height: 48px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const WifiIcon = styled.img`
  height: 16px;
`;

const HiddenIconContainer = styled.div`
  height: 48px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const LanguageIconContainer = styled.div`
  height: 48px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const WeatherInfoContainer = styled.div`
  height: 48px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const WeatherType = styled.div`
  margin-left: 5px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const WeatherIcon = styled.img`
  height: 45px;
`;
