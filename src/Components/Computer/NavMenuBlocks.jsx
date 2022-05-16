// Import node_modules
import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box, Slider } from "@mui/material";

// Import icons
import { AiOutlineGithub, AiOutlineFontSize } from "react-icons/ai";
import { FiVolume2 } from "react-icons/fi";
import { FaSteamSymbol, FaDiscord } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { BiSort } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { CgGitFork } from "react-icons/cg";

// Import css
import "./../../Assets/CSS/MyComputer.css";
import Wifi from "./../../Assets/Icons/Wifi.png";

// Assigning language colours
const languageColors = {
  javascript: "#f1e05a",
  java: "#b07219",
  kotlin: "#a97bff",
  html: "#e34c26",
  css: "#563d7c",
  typescript: "#2b7489",
  ejs: "#a91e50",
};

export class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // List of wifi's user can connect to
      wifiList: [
        {
          name: "Panda",
          type: "Secured",
          connected: true,
        },
        {
          name: "Kyu Bot",
          type: "Secured",
          connected: false,
        },
        {
          name: "theshadow0001",
          type: "Not secured",
          connected: false,
        },
        {
          name: "Spooky Floorf",
          type: "Secured",
          connected: false,
        },
      ],
      // What to sort the github list by
      sort: "name",
      // List of github project if unable to fetch from API
      github: [
        {
          name: "Alita",
          stars: 78,
          url: "https://github.com/KSJaay/Alita",
          description:
            "A Discord.js bot using MongoDB (npm package Mongoose) to create a bot multipurpose",
          size: 403,
          language: "JavaScript",
          forks: 28,
        },
        {
          name: "Win10React",
          stars: 11,
          url: "https://github.com/KSJaay/Win10React/tree/main",
          description:
            "💻 Windows 10 themed portfolio, using React and Styled Components.",
          size: 31,
          language: "JavaScript",
          forks: 1,
        },
        {
          name: "Auto-Update-Github-Bio",
          stars: 3,
          url: "https://github.com/KSJaay/Auto-Update-Github-Bio",
          description: "📚 GitHub biography auto updated using random quotes",
          size: 6,
          language: "Kotlin",
          forks: 0,
        },
        {
          name: "ValorantBot",
          stars: 1,
          url: "https://github.com/KSJaay/ValorantBot",
          description:
            "Multi-language bot providing the latest information about Valorant Agents, Servers, and much more.",
          size: 11,
          language: "JavaScript",
          forks: 1,
        },
        {
          name: "LAN-Chat-App",
          stars: 1,
          url: "https://github.com/KSJaay/LAN-Chat-App",
          description: "Group based chatting application using Java socket",
          size: 336,
          language: "Java",
          forks: 0,
        },
        {
          name: "is_digit",
          stars: 1,
          url: "https://github.com/KSJaay/is_digit",
          description:
            "A simple Node.js package to check if your variable is an integer.",
          size: 31,
          language: "JavaScript",
          forks: 0,
        },
      ],
    };
  }

  // Removed backend for windows, will add back in new version
  // componentDidMount(){
  //     fetch('/github').then(res => res.json()).then(data => this.setState({github: data})).catch((err) => console.log(err));
  // }

  render() {
    // Filter github proects based on search fron user
    let availableRepos = this.state.github.filter(
      (y) =>
        y.name.toLowerCase().includes(this.props.state.startupValue) ||
        y.description.toLowerCase().includes(this.props.state.startupValue) ||
        y.language.toLowerCase().includes(this.props.state.startupValue) ||
        y.url.toLowerCase().includes(this.props.state.startupValue)
    );

    // Sort github projects based on sort
    if (this.state.sort === "name") {
      availableRepos = availableRepos.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else if (this.state.sort === "fork") {
      availableRepos = availableRepos.sort((a, b) => b.forks - a.forks);
    } else if (this.state.sort === "stars") {
      availableRepos = availableRepos.sort((a, b) => b.stars - a.stars);
    }

    // List of navbar items such as search, volume, github etc.

    return (
      <Content>
        <StartupContainer
          style={
            this.props.state.navbar.startup === false
              ? { display: "none" }
              : { display: "flex" }
          }
          id="startupContainer"
        >
          <StartupMenuContainer id="startupMenuContainer">
            <StartupMenuTop id="startupMenuTop">
              <StartupMenuTopItem id="startupMenuTopItem">
                <BiSort size={32} id="startupMenuIcon" />
              </StartupMenuTopItem>
            </StartupMenuTop>
            <StartupMenuBottom id="startupMenuBottom">
              <StartupMenuBottomItem
                id="startupMenuBottomItem"
                onClick={() => this.setState({ sort: "stars" })}
              >
                <RiStarSFill
                  size={32}
                  onClick={() => this.setState({ sort: "stars" })}
                  id="startupMenuIcon"
                />
              </StartupMenuBottomItem>
              <StartupMenuBottomItem
                id="startupMenuBottomItem"
                onClick={() => this.setState({ sort: "fork" })}
              >
                <CgGitFork
                  size={32}
                  onClick={() => this.setState({ sort: "fork" })}
                  id="startupMenuIcon"
                />
              </StartupMenuBottomItem>
              <StartupMenuBottomItem
                id="startupMenuBottomItem"
                onClick={() => this.setState({ sort: "name" })}
              >
                <AiOutlineFontSize
                  onClick={() => this.setState({ sort: "name" })}
                  size={32}
                  id="startupMenuIcon"
                />
              </StartupMenuBottomItem>
            </StartupMenuBottom>
          </StartupMenuContainer>
          <StartupRepoContainer id="startupRepoContainer">
            {this.state.github &&
              availableRepos.map((repo, index) => {
                return (
                  <RepoContainer
                    style={{
                      borderLeft: `3px solid ${
                        languageColors[repo.language?.toLowerCase()]
                      }`,
                    }}
                    href={repo.url}
                    target="_blank"
                    key={index}
                    id="startupRepoContainer"
                  >
                    <RepoTextContainer id="startupRepoTextContainer">
                      <RepoName id="startupRepoName">{repo.name}</RepoName>
                      <RepoPopularText id="startupRepoPopularName">
                        <RepoStars id="startupRepoStars">
                          {repo.stars} ⭐
                        </RepoStars>
                        <RepoForks id="startupRepoForks">
                          {repo.forks} 🍴
                        </RepoForks>
                      </RepoPopularText>
                    </RepoTextContainer>
                  </RepoContainer>
                );
              })}
          </StartupRepoContainer>
        </StartupContainer>

        <TimeContainer
          style={
            this.props.state.navbar.time === false
              ? { display: "none" }
              : { display: "block" }
          }
          id="calendarContainer"
        >
          <TimeContent id="calendarContent">
            <PopupTime id="calendarTime">{this.props.state.seconds}</PopupTime>
            <PopupDate id="calendarDate">{this.props.state.fullDate}</PopupDate>
          </TimeContent>
          <Calendar
            onChange={(value) => this.setState({ calendar: new Date(value) })}
            value={this.props.state.calendar}
          />
          <TodoListContainer>Todo list</TodoListContainer>
        </TimeContainer>

        <LanguageContainer
          style={
            this.props.state.navbar.language === false
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <LanguageBlockActive id="langContainer">
            <LanguageIcon id="langIcon">ENG</LanguageIcon>
            <LanguageText id="langText">English (United Kingdom)</LanguageText>
          </LanguageBlockActive>
          <LanguageBlock id="langContainer">
            <LanguageIcon id="langIcon">NON</LanguageIcon>
            <LanguageText id="langText">Idk other languages</LanguageText>
          </LanguageBlock>
        </LanguageContainer>

        <WifiContainer
          style={
            this.props.state.navbar.wifi === false
              ? { display: "none" }
              : { display: "block" }
          }
          id="wifiContainer"
        >
          {this.state.wifiList &&
            this.state.wifiList.map((item, index) => {
              if (item.connected === true) {
                return (
                  <WifiBlockActive key={index} id="wifiBlock">
                    <WifiIcon src={Wifi} id="wifiIcon" />
                    <WifiTextBlock>
                      <WifiTitle id="wifiTitle">{item.name}</WifiTitle>
                      <WifiText style={{ display: "block" }} id="wifiText">
                        Connected
                      </WifiText>
                    </WifiTextBlock>
                  </WifiBlockActive>
                );
              }
              return null;
            })}

          {this.state.wifiList &&
            this.state.wifiList.map((item, index) => {
              if (item.connected === false) {
                return (
                  <WifiBlock
                    key={index}
                    onClick={() => {
                      let list = this.state.wifiList.map((x) => {
                        x.connected = false;
                        return x;
                      });
                      list[index].connected = true;
                      this.setState({ wifiList: list });
                    }}
                    id="wifiBlock"
                  >
                    <WifiIcon src={Wifi} id="wifiIcon" />
                    <WifiTextBlock>
                      <WifiTitle id="wifiTitle">{item.name}</WifiTitle>
                      <WifiText id="wifiText">{item.type}</WifiText>
                    </WifiTextBlock>
                  </WifiBlock>
                );
              }
              return null;
            })}
        </WifiContainer>

        <AudioContainer
          style={
            this.props.state.navbar.volume === false
              ? { display: "none" }
              : { display: "block" }
          }
          id="volumeContainer"
        >
          <AudioTitle id="volumeTitle">Headset (CORSAIR HS80)</AudioTitle>
          <Box width={330} id="volumeBox">
            <Slider
              defaultValue={25}
              aria-label="Default"
              valueLabelDisplay="auto"
              id="volumeSlider"
            />
          </Box>
        </AudioContainer>

        <HiddenContainer
          style={
            this.props.state.navbar.hidden === false
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          <HiddenBlock>
            <HiddenItem>
              <MdSecurity
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </HiddenItem>
          </HiddenBlock>
          <HiddenBlock id="volumeButton">
            <HiddenItem id="volumeButton">
              <FiVolume2
                style={{ width: "20px", height: "20px", color: "white" }}
                id="volumeButton"
              />
            </HiddenItem>
          </HiddenBlock>
          <HiddenBlock>
            <HiddenItem>
              <FaSteamSymbol
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                  backgroundImage: "linear-gradient(#101d2f,#1384b6)",
                  borderRadius: "100%",
                }}
              />
            </HiddenItem>
          </HiddenBlock>
          <HiddenBlock href="https://kyubot.com" target="_blank">
            <HiddenItem>
              <FaDiscord
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </HiddenItem>
          </HiddenBlock>
          <HiddenBlock href="https://github.com/ksjaay" target="_blank">
            <HiddenItem>
              <AiOutlineGithub
                style={{ width: "20px", height: "20px", color: "white" }}
              />
            </HiddenItem>
          </HiddenBlock>
        </HiddenContainer>
      </Content>
    );
  }
}

// Styled Components
const Content = styled.div``;

const TimeContainer = styled.div`
  position: absolute;
  bottom: 48px;
  right: 0;
  height: auto;
  width: 385px;
  max-width: 385px;
  background-color: #252628aa;
  border: 1px solid #454a53;
  z-index: 99;
`;

const PopupTime = styled.div`
  font-size: 2.5em;
`;

const PopupDate = styled.div`
  font-size: 1.1em;
`;

const TimeContent = styled.div`
  padding: 20px 0 10px 20px;
  border-bottom: 2px solid #454a53;
`;

const TodoListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  padding: 0 10px 10px 0;
  z-index: 99;

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
    cursor: pointer;
  }
`;

const LanguageContainer = styled.div`
  position: absolute;
  bottom: 48px;
  right: 0;
  height: auto;
  width: 325px;
  background-color: #252628aa;
  border: 1px solid #454a53;
  z-index: 99;
`;

const LanguageBlockActive = styled.div`
  display: flex;
  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.highlight}cc;
  &:hover {
    cursor: pointer;
  }
`;

const LanguageBlock = styled.div`
  display: flex;
  padding: 20px 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight}44;
    cursor: pointer;
  }
`;

const LanguageIcon = styled.div`
  margin: 0 15px;
`;

const LanguageText = styled.div`
  flex: 1;
`;

const WifiContainer = styled.div`
  position: absolute;
  bottom: 48px;
  right: 0;
  height: auto;
  width: 385px;
  max-width: 385px;
  background-color: #252628aa;
  border: 1px solid #454a53;
  z-index: 99;
`;

const WifiBlockActive = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.light};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

const WifiIcon = styled.img`
  width: 25px;
  height: 25px;
  padding: 15px;
`;

const WifiTextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const WifiTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const WifiText = styled.div`
  flex: 1;
  display: flex;
  color: #aaa;
  display: none;
`;

const WifiBlock = styled.div`
  display: flex;
  margin: 10px 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
  &:hover ${WifiText} {
    display: block;
  }

  &:hover ${WifiTitle} {
    align-items: flex-end;
  }
`;

const AudioContainer = styled.div`
  position: absolute;
  bottom: 48px;
  right: 0;
  height: auto;
  width: 340px;
  max-width: 340px;
  background-color: #252628aa;
  border: 1px solid #454a53;
  padding: 8px 10px 3px 10px;
  z-index: 99;
`;

const AudioTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const HiddenContainer = styled.div`
  position: absolute;
  bottom: 48px;
  right: 140px;
  height: auto;
  width: 120px;
  min-width: 120px;
  background-color: #252628aa;
  border: 1px solid #454a53;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 99;
`;

const HiddenBlock = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HiddenItem = styled.div`
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const StartupContainer = styled.div`
  position: absolute;
  bottom: 48px;
  left: 0;
  height: auto;
  min-width: 300px;
  width: 50vw;
  max-width: 500px;
  max-height: 50vh;
  overflow: auto;
  background-color: #252628ee;
  border: 1px solid #454a53;
  z-index: 99;
  display: flex;
  flex-direction: row;
`;

const StartupMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartupMenuBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const StartupMenuBottomItem = styled.div`
  margin: 3px 0px;
  padding: 3px 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;

const StartupMenuTopItem = styled.div`
  padding: 3px 5px;
`;

const StartupMenuTop = styled.div``;

const StartupRepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 5px;
`;

const RepoContainer = styled.a`
  border-left: 3px solid ${(props) => props.theme.colors.highlight};
  display: flex;
  margin-bottom: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.font};

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight}66;
    cursor: pointer;
  }
`;

const RepoTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const RepoName = styled.div`
  display: flex;
  flex: 1;
`;

const RepoPopularText = styled.div`
  display: flex;
  flex: 1;
`;

const RepoStars = styled.div`
  margin-right: 10px;
`;

const RepoForks = styled.div``;
