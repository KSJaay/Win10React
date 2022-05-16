// Import node_modules
import React from "react";
import styled from "styled-components";

// Import images
import KSJaay from "./../../../Assets/Images/KSJaay.png";

// Nice page with some nice styling
const About = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={KSJaay} draggable={false} />
      </LogoContainer>
      <Header>
        Hi, I'm <HeaderHighlight>KSJaay</HeaderHighlight>,
      </Header>
      <SubHeader>
        I code things on the <HeaderHighlight>web</HeaderHighlight>.
      </SubHeader>
      <List>
        <ListItem>
          Recent graduate from{" "}
          <Highlighter>University of Greenwhich</Highlighter> with a strong
          focus on both{" "}
          <Highlighter>frontend and backend development</Highlighter>.
        </ListItem>
        <ListItem>
          Currently focused on creating applications with{" "}
          <Highlighter>React, Node.js, Mobx, and MongoDB</Highlighter>, like
          this website.
        </ListItem>
        <ListItem>
          Offering <Highlighter>3 years of experience</Highlighter> in software
          development and testing for a large user-based company.
        </ListItem>
        <ListItem>
          Seeking an opportunity to utilise skills in developing software for an
          established company.
        </ListItem>
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Logo = styled.img`
  height: 125px;
  width: auto;
  border-radius: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 28px;
`;

const HeaderHighlight = styled.a`
  padding-left: 5px;
  color: ${(props) => props.theme.colors.highlight};
  font-weight: bold;
`;

const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 22px;
`;

const List = styled.ul`
  width: 60%;
  margin: 0 20%;
  margin-top: 30px;

  @media screen and (max-width: 1200px) {
    margin: 0 10%;
    margin-top: 30px;
    width: 75%;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
    margin-top: 30px;

    flex: 1;
    width: auto;
  }
`;

const ListItem = styled.li`
  margin: 8px 0;
`;

const Highlighter = styled.span`
  color: ${(props) => props.theme.colors.highlight};
  font-weight: 500;
`;

export default About;
