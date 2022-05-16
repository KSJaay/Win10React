// Import node_modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Style";
import { lightTheme } from "./Utils/Style";

// Import react components
import { Computer } from "./Components/Computer/MainPage";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default theme
      theme: "dark",
    };
  }

  componentDidMount() {
    // Load theme from local storage
    let theme = !localStorage.getItem("ksjaay_theme")
      ? "dark"
      : localStorage.getItem("ksjaay_theme");
    this.setState({ theme: theme });

    // Version management for later features
    let version = localStorage.getItem("version");
    if (!version) localStorage.setItem("version", "1.0.0");
  }

  render() {
    return (
      <ThemeProvider
        // Set theme
        theme={this.state.theme === "dark" ? darkTheme : lightTheme}
      >
        <Router>
          <Route exact path="/" component={Computer} />
        </Router>
      </ThemeProvider>
    );
  }
}
