// Import node_modules
import React from "react";
import styled from "styled-components";

import TerminalBackground from "./../../Assets/Images/TerminalBackground.png";
const byteSize = (str) => new Blob([str]).size;

export default class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: "C:\\Users\\KSJaay\\Desktop",
      input: "",
      tabInput: null,
      currentDir: null,
      rows: [],
    };
    this.prevCommandList = [];
    this.prevCommandIndex = -1;
    this.directories = {};
  }

  componentDidMount() {
    let invalidItems = [
      "recycle bin",
      "google chrome",
      "visual studio code",
      "github desktop",
      "calculator",
      "ksjaay",
      "terminal",
    ];
    let files = this.props.data.desktop
      .filter(
        (x) => x.id === "file" || x.id === "react" || x.id === "react file"
      )
      .map((y) => {
        return {
          name: y.id === "file" ? `${y.name}.txt` : `${y.name}.jsx`,
          content: y.content,
          id: y.id,
        };
      });
    let folders = this.props.data.desktop.filter(
      (x) =>
        !invalidItems.includes(x.name.toLowerCase()) &&
        x.id !== "file" &&
        x.id !== "react" &&
        x.id !== "react file"
    );
    for (let j = 0; j < folders.length; j++) {
      let folder = folders[j];
      this.directories[folder.name] = folder;
    }
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      this.directories[file.name] = file;
    }
  }

  handleResponse = (text) => {
    if (text === "cls") {
      this.setState({ rows: [], input: "" });
    } else {
      let rows = this.state.rows;
      let directory = !this.state.currentDir
        ? this.state.directory
        : `${this.state.directory}\\${this.state.currentDir}`;
      rows.push({ directory: directory, input: this.state.input, text: text });
      this.setState({ rows: rows, input: "" });
    }
  };

  handleCommand = (command) => {
    let args = command.split(" ");
    let commandName = args[0];
    args.shift();
    let result = [""];
    let rest = args.join(" ").trim();
    switch (commandName) {
      case "cd": {
        if (rest === "..") {
          return this.setState({
            currentDir: null,
            input: "",
            tabInput: null,
            rows: [
              ...this.state.rows,
              ...[
                {
                  directory: !this.state.currentDir
                    ? this.state.directory
                    : `${this.state.directory}\\${this.state.currentDir}`,
                  input: this.state.input,
                  text: [],
                },
              ],
            ],
          });
        } else {
          if (!this.state.currentDir) {
            if (this.directories[rest]) {
              return this.setState({
                currentDir: rest,
                input: "",
                tabInput: null,
                rows: [
                  ...this.state.rows,
                  ...[
                    {
                      directory: !this.state.currentDir
                        ? this.state.directory
                        : `${this.state.directory}\\${this.state.currentDir}`,
                      input: this.state.input,
                      text: [],
                    },
                  ],
                ],
              });
            }
          } else {
            if (
              this.directories[this.state.currentDir].content.indexOf(rest) < 0
            ) {
              result = ["The system cannot find the path specified.", "\u2028"];
            }
          }
          result = ["The system cannot find the path specified.", "\u2028"];
        }
        break;
      }

      case "cls": {
        result = "cls";
        break;
      }

      case "date": {
        result = [window.Date(), "\u2028"];
        break;
      }

      case "dir": {
        if (!this.state.currentDir) {
          let keys = Object.keys(this.directories);
          result = keys.map((x) => {
            if (x.endsWith(".txt") || x.endsWith(".jsx")) {
              let size = (byteSize(x.content) / 1000).toFixed(1);
              return `${x} - ${size} KB`;
            } else {
              return `${x} - ${this.directories[x].content.length} files`;
            }
          });
          result.push("\u2028");
        } else {
          if (this.directories[this.state.currentDir]) {
            result = this.directories[this.state.currentDir].content.map(
              (x) => {
                let size = (byteSize(x.content) / 1000).toFixed(1);
                return `${
                  x.id === "file" ? `${x.name}.txt` : `${x.name}.jsx`
                } - ${size} KB`;
              }
            );
            result.push("\u2028");
          } else {
            result = ["\u2028"];
          }
        }
        break;
      }

      case "echo": {
        result = [rest, "\u2028"];
        break;
      }

      case "exit": {
        this.props.closeModal("terminal");
        break;
      }

      case "find": {
        if (!this.state.currentDir) {
          let validFiles = this.props.data.desktop.filter(
            (x) => x.id === "file" || x.id === "react" || x.id === "react file"
          );
          let foundFiles = validFiles.filter((y) => y.content.includes(rest));
          if (foundFiles.length < 1) {
            result = [
              "unable to find a file with valid information.",
              "\u2028",
            ];
          } else {
            result = foundFiles.map(
              (z) => `${z.id === "file" ? `${z.name}.txt` : `${z.name}.jsx`}`
            );
            if (result[0]) {
              result.push("\u2028");
            } else {
              result = [
                "unable to find a file with valid information.",
                "\u2028",
              ];
            }
          }
        } else {
          if (this.directories[this.state.currentDir]) {
            let validFiles = this.props.data.desktop[
              this.state.currentDir
            ].content.filter(
              (x) =>
                x.id === "file" || x.id === "react" || x.id === "react file"
            );
            let foundFiles = validFiles.filter((y) => y.content.includes(rest));
            if (foundFiles.length < 1) {
              result = [
                "unable to find a file with valid information.",
                "\u2028",
              ];
            } else {
              result = foundFiles.map(
                (z) => `${z.id === "file" ? `${z.name}.txt` : `${z.name}.jsx`}`
              );
              if (result[0]) {
                result.push("\u2028");
              } else {
                result = [
                  "unable to find a file with valid information.",
                  "\u2028",
                ];
              }
            }
          }
        }
        break;
      }

      case "help": {
        result = [
          <table>
            <tr>
              <td>cd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>Displays the name of or changes the current directory.</td>
            </tr>
            <tr>
              <td>cls</td>
              <td>Clears the screen.</td>
            </tr>
            <tr>
              <td>date</td>
              <td>Displays current the date.</td>
            </tr>
            <tr>
              <td>dir</td>
              <td>
                Displays a list of files and subdirectories in a directory.
              </td>
            </tr>
            <tr>
              <td>echo</td>
              <td>Displays the input messages.</td>
            </tr>
            <tr>
              <td>exit</td>
              <td>Quits the terminal program.</td>
            </tr>
            <tr>
              <td>find</td>
              <td>Searches for a text string in a file or directory.</td>
            </tr>
            <tr>
              <td>help</td>
              <td>Provides Help information for Terminal commands.</td>
            </tr>
            <tr>
              <td>mkdir</td>
              <td>Creates a directory or file.</td>
            </tr>
            <tr>
              <td>open</td>
              <td>Opens application using name.</td>
            </tr>
            <tr>
              <td>print</td>
              <td>Prints a text file.</td>
            </tr>
          </table>,
          "\u2028",
        ];
        break;
      }

      case "mkdir": {
        if (!rest || rest.length < 1) {
          result = ["please specify the folder name", "\u2028"];
        } else {
          let availableItems = this.props.data.desktop.map((x) =>
            x.name.toLowerCase()
          );
          if (availableItems.includes(rest.toLowerCase())) {
            result = [`Subdirectory ${rest} already exists.`, "\u2028"];
          } else {
            this.props.createFolder(rest);
            result = [`"${rest}" folder has been created.`, "\u2028"];
          }
        }
        break;
      }

      case "open": {
        let fileIndex = this.props.data.desktop
          .map((x) => x.name.toLowerCase())
          .indexOf(rest.toLowerCase());
        if (fileIndex > -1) {
          this.props.openTerminalModal(this.props.data.desktop[fileIndex].name);
          result = [`Opened "${rest}".`, "\u2028"];
        } else {
          result = [`Unable to find application "${rest}".`, "\u2028"];
        }
        break;
      }

      case "print": {
        if (this.state.currentDir) {
          if (this.directories[this.state.currentDir]) {
            let files = this.directories[this.state.currentDir].content.map(
              (x) => x.name
            );
            if (files.includes(rest)) {
              let fileIndex = files.indexOf(rest);
              result = [
                this.directories[this.state.currentDir].content[fileIndex]
                  .content,
                "\u2028",
              ];
            }
          }
        } else if (this.directories[rest]) {
          if (
            this.directories[rest].id === "file" ||
            this.directories[rest].id === "react" ||
            this.directories[rest].id === "react file"
          ) {
            result = [this.directories[rest].content, "\u2028"];
          }
        } else {
          result = ["No file to print.", "\u2028"];
        }
        break;
      }
      default:
        result = [
          `'${command}' is not recognized as an internal command.`,
          "Available commands: [cd, cls, date, dir, echo, edit, exit, find, help, mkdir, recycle, chrome, code, calculator, ksjaay, terminal]",
        ];
    }
    return this.handleResponse(result);
  };

  validateKey = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (!this.state.currentDir) {
        let directories = Object.keys(this.directories);
        let command = this.state.input.trim();
        if (command.length < 1) return;
        let args = command.split(" ");
        let commandName = args[0];
        args.shift();
        let rest;
        if (this.state.tabInput == null) {
          rest = !args[0] ? "" : args.join(" ").trim();
        } else {
          rest = this.state.tabInput;
        }
        let filteredDir = directories.filter((x) => x.startsWith(rest));
        if (filteredDir.length > 0) {
          let index = filteredDir.indexOf(args.join(" ").trim());
          if (index < 0) {
            let results = `${commandName} ${filteredDir[0]}`;
            return this.setState({ tabInput: rest, input: results });
          } else {
            if (filteredDir[index + 1]) {
              let results = `${commandName} ${filteredDir[index + 1]}`;
              return this.setState({ tabInput: rest, input: results });
            } else {
              let results = `${commandName} ${filteredDir[0]}`;
              return this.setState({ tabInput: rest, input: results });
            }
          }
        } else return;
      }
    } else if (e.key === "Enter") {
      let command = this.state.input.trim();
      if (command.length < 1) return;

      this.handleCommand(command);
      if (this.prevCommandList[this.prevCommandList.length - 1] !== command) {
        this.prevCommandList.push(command);
      }
      this.prevCommandIndex = this.prevCommandList.length - 1;
    } else if (e.key === "ArrowUp") {
      if (this.prevCommandIndex < 0) return this.setState({ input: "" });
      if (!this.prevCommandList[this.prevCommandIndex]) {
        this.setState({ input: "" });
      } else {
        this.setState({ input: this.prevCommandList[this.prevCommandIndex] });
        this.prevCommandIndex = this.prevCommandIndex - 1;
      }
    } else if (e.key === "ArrowDown") {
      if (this.prevCommandIndex + 1 >= this.prevCommandList.length) {
        this.setState({ input: "" });
      } else {
        this.prevCommandIndex = this.prevCommandIndex + 1;
        this.setState({ input: this.prevCommandList[this.prevCommandIndex] });
      }
    } else {
      this.setState({ tabInput: null });
    }
  };

  render() {
    return (
      <Container>
        <Background src={TerminalBackground} draggable={false} />
        <React.Fragment>
          {this.state.rows &&
            this.state.rows.map((row, index) => (
              <Directory key={index}>
                {row.directory}
                {">"}
                <InputPrev>{row.input}</InputPrev>
                {row.text &&
                  row.text.map((text, zIndex) => (
                    <Text key={zIndex}>{text}</Text>
                  ))}
              </Directory>
            ))}
        </React.Fragment>
        <Row>
          <Directory>
            {this.state.directory}
            {!this.state.currentDir ? null : `\\${this.state.currentDir}`}
            {">"}
          </Directory>
          <TerminalInput
            type="text"
            value={this.state.input}
            onChange={(event) => this.setState({ input: event.target.value })}
            onKeyDown={this.validateKey}
          />
        </Row>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding-left: 5px;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Cascadia Code", sans-serif;
  z-index: 99;
`;

const Directory = styled.div`
  font-family: "Cascadia Code", sans-serif;
  z-index: 99;
`;

const TerminalInput = styled.input`
  flex: 1;
  background-color: #00000000;
  outline: none;
  color: white;
  border: none;
  font-size: 16px;
  padding: 0px 4px;
  font-family: "Cascadia Code", sans-serif;
  z-index: 99;
`;

const InputPrev = styled.a`
  color: white;
  font-size: 16px;
  padding: 0px 4px;
`;

const Text = styled.div`
  font-family: "Cascadia Code", sans-serif;
  z-index: 99;
`;
