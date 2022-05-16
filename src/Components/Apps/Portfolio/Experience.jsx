// Import node_modules
import React from "react";
import styled from "styled-components";

// List of all the experience I've had
const Jobs = [
  {
    title: "Junior Developer",
    company: "Nester",
    url: "https://nester.com",
    dates: ["Sept 2021", "Apr 2022"],
    description:
      "Nester provides an easy to use platform where users can invest in properties and get a return on their investment. Users are able to track their weekly income, get updates about the property status and more.",
    stack: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Node.js", link: "https://nodejs.org/en/about/" },
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Strapi", link: "https://strapi.io/" },
      { name: "Sass", link: "https://sass-lang.com/" },
      { name: "Hotjar", link: "https://www.hotjar.com/" },
      { name: "Tailwind", link: "https://www.hotjar.com/" },
      { name: "DynamoDB", link: "https://aws.amazon.com/dynamodb/" },
    ],
  },
  {
    title: "Fullstack Developer",
    company: "AmariBot",
    url: "https://amaribot.com",
    dates: ["Oct 2019", "Aug 2021"],
    description:
      "AmariBot focuses on developing a program that rewards users for being active within a community. Community staff members can set up custom rewards and change the difficulty of reaching rewards.",
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
  },
  {
    title: "Freelance Developer",
    company: "",
    url: null,
    dates: ["Feb 2019", "Apr 2020"],
    description:
      "While studying I worked on various static websites and complex Discord/Twitter bots which allowed users to monitor news, status of websites/games, and many other features.",
    stack: [
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/",
      },
      { name: "Express.js", link: "https://expressjs.com/" },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/",
      },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "Node.js", link: "https://nodejs.org/en/about/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
      { name: "React", link: "https://reactjs.org/" },
    ],
  },
];

// Nice page with some nice styling
const Experience = () => {
  return (
    <Container>
      <Title>Experience</Title>
      <JobContainer>
        {Jobs &&
          Jobs.map((Job, index) => (
            <JobContent key={index}>
              <JobHeader onClick={() => window.open(Job.url, "_blank")}>
                <JobTitle>
                  {Job.title}
                  {Job.company ? ` - ${Job.company}` : null}
                </JobTitle>
                <JobDate>
                  {Job.dates[0]}
                  {Job.dates[1] ? ` - ${Job.dates[1]}` : null}
                </JobDate>
              </JobHeader>
              <JobDescription onClick={() => window.open(Job.url, "_blank")}>
                {Job.description}
              </JobDescription>
              <JobStackContainer>
                {Job.stack &&
                  Job.stack.map((stack, zindex) => (
                    <JobStack key={zindex} href={stack.link} target="_blank">
                      {stack.name}
                    </JobStack>
                  ))}
              </JobStackContainer>
            </JobContent>
          ))}
      </JobContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  width: 100%;
  margin: 15px 0;
  font-weight: 600;
`;

const JobContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const JobContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 8px 15px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 0 8px 25px -15px rgb(0 0 0 / 80%);
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.light};
  }
`;

const JobHeader = styled.div`
  display: flex;
`;

const JobTitle = styled.div`
  flex: 1;
  font-size: 20px;
  color: ${(props) => props.theme.colors.highlight};
`;

const JobDate = styled.div``;

const JobDescription = styled.div``;

const JobStackContainer = styled.div`
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
`;

const JobStack = styled.a`
  color: white;
  text-decoration: none;
  padding-right: 12px;
  padding-bottom: 3px;
  font-size: 13px;

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export default Experience;
