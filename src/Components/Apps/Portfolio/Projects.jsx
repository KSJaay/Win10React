// Import node_modules
import React from "react";
import styled from "styled-components";

// Import class
import "./../../../Assets/CSS/Recent.css";

// List of projects I was really happy with/worked on
const recentProjects = [
  {
    name: "Covid-19 Application",
    date: "Oct 2020",
    description:
      "A React Native application, with location based contact tracing system using geolocation, statistics, news using the NewsAPI and other information about Covid-19 based on a users region. All fitted into a simple design.",
    stack: [
      { name: "Expo", link: "https://expo.dev/" },
      { name: "Express.js", link: "https://expressjs.com/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "Node.js", link: "https://nodejs.org/en/about/" },
      { name: "React", link: "https://reactjs.org/" },
      { name: "React Native", link: "https://reactnative.dev/" },
    ],
    image: require("./../../../Assets/Images/Projects/CovidApp2.png"),
    link: "",
  },
  {
    name: "Chat app",
    date: "Mar 2020",
    description:
      "An instant group messaging application created using Java and Socket. This application hosts a LAN server which users can connect to, once connected users can communicate with each other using a custom interface.",
    stack: [
      { name: "Java", link: "https://go.java/?intcmp=gojava-banner-java-com" },
      {
        name: "Socket",
        link: "https://docs.oracle.com/javase/7/docs/api/java/net/Socket.html",
      },
    ],
    image: require("./../../../Assets/Images/Projects/JavaChat.png"),
    link: "https://github.com/KSJaay/LAN-Chat-App",
  },
  {
    name: "AmariBot",
    description:
      "A leveling focused Discord bot which rewards users for being active within a community. AmariBot offers a user friendly experience and with highly customisable settings. Users are able to custom their profiles cards, settings, announcements and much more.",
    date: "Aug 2019",
    stack: [
      { name: "Discord.js", link: "https://discord.js.org/#/" },
      { name: "EJS", link: "https://ejs.co/" },
      { name: "Express.js", link: "https://expressjs.com/" },
      { name: "Fastify", link: "https://www.fastify.io/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "Node.js", link: "https://nodejs.org/en/about/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
      { name: "React", link: "https://reactjs.org/" },
    ],
    image: require("./../../../Assets/Images/Projects/AmariWebsite.PNG"),
    link: "https://amaribot.com",
  },
  {
    name: "Alita-Open Source",
    date: "Aug 2019",
    description:
      "An easy to use, multipurpose bot created using Discord.js and MongoDB. Alita open source was created for the sole purpose of teaching new Discord.js framework users the basics. It uses simple handlers, that are easy to understand for beginner programmers.",
    stack: [
      { name: "Chart.js", link: "https://www.chartjs.org/" },
      { name: "Discord.js", link: "https://discord.js.org/#/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "Node.js", link: "https://nodejs.org/en/about/" },
    ],
    image: require("./../../../Assets/Images/Projects/AlitaOpenSource.png"),
    link: "https://github.com/KSJaay/Alita",
  },
];

const Project = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <Projects>
        {recentProjects &&
          recentProjects.map((project, index) => (
            <ProjectItem key={index} href={project.link} target={"_blank"}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectDate>{project.date}</ProjectDate>
              <StackContainer>
                {project.stack &&
                  project.stack.map((stack, yindex) => (
                    <StackText href={stack.link} key={yindex} target={"_blank"}>
                      {stack.name}
                    </StackText>
                  ))}
              </StackContainer>
            </ProjectItem>
          ))}
      </Projects>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  font-weight: 600;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const ProjectItem = styled.a`
  display: block;
  margin: 10px 0;
  padding: 10px 10px 5px 10px;
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 8px 25px -15px rgb(0 0 0 / 80%);
  color: white;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    cursor: pointer;
  }
`;

const ProjectTitle = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.colors.highlight};
`;
const ProjectDescription = styled.div`
  margin: 10px 0;
  font-size: 16px;
`;

const ProjectDate = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
`;

const StackContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
`;

const StackText = styled.a`
  color: white;
  text-decoration: none;
  padding-right: 12px;
  padding-bottom: 3px;
  font-size: 13px;

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export default Project;
