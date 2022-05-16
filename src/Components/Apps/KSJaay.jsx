// Import node_modules
import React, { useState } from "react";
import styled from "styled-components";

// Import components
import About from "./Portfolio/About";
import Contact from "./Portfolio/Contact";
import Experience from "./Portfolio/Experience";
import Projects from "./Portfolio/Projects";
import Resume from "./Portfolio/Resume";
import Skills from "./Portfolio/Skills";

// Assign components to names which user can select from
const sections = {
  about: <About />,
  experience: <Experience />,
  skills: <Skills />,
  projects: <Projects />,
  resume: <Resume />,
  contact: <Contact />,
};

// Fun and interesting stuff about me.

const KSJaay = () => {
  const [active, setActive] = useState("about");
  return (
    <Container>
      <SideContainer>
        <SideContainerItem
          onClick={() => setActive("about")}
          style={active === "about" ? { backgroundColor: "#3bce85" } : {}}
        >
          About Me
        </SideContainerItem>
        <SideContainerItem
          onClick={() => setActive("experience")}
          style={active === "experience" ? { backgroundColor: "#3bce85" } : {}}
        >
          Experience
        </SideContainerItem>
        <SideContainerItem
          onClick={() => setActive("skills")}
          style={active === "skills" ? { backgroundColor: "#3bce85" } : {}}
        >
          Skills
        </SideContainerItem>
        <SideContainerItem
          onClick={() => setActive("projects")}
          style={active === "projects" ? { backgroundColor: "#3bce85" } : {}}
        >
          My Projects
        </SideContainerItem>
        <SideContainerItem
          onClick={() => setActive("resume")}
          style={active === "resume" ? { backgroundColor: "#3bce85" } : {}}
        >
          Resume
        </SideContainerItem>
        <SideContainerItem
          onClick={() => setActive("contact")}
          style={active === "contact" ? { backgroundColor: "#3bce85" } : {}}
        >
          Contact Me
        </SideContainerItem>
      </SideContainer>
      <InfoContainer>{sections[active]}</InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SideContainer = styled.div`
  width: 200px;
  background-color: ${(props) => props.theme.colors.light};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SideContainerItem = styled.div`
  padding: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.highlight}66;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  overflow: auto;
`;

export default KSJaay;
