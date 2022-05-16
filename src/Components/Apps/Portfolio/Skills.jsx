// Import node_modules
import React, { useState } from "react";
import styled from "styled-components";

// Import images object
import { Icons } from "./../../../Assets/Icons/Icons.jsx";

// List of all the items in the skills section
const filterList = {
  favourite: {
    languages: [
      { name: "TypeScript", info: null },
      { name: "Nodejs", info: null },
      { name: "C#", info: null },
      { name: "HTML", info: null },
      { name: "Kotlin", info: null },
    ],
    frameworks: [
      { name: "Nextjs", info: null },
      { name: "Socket.io", info: null },
      { name: "Mobx", info: null },
      { name: "Chartjs", info: null },
      { name: "Discord.js", info: null },
    ],
    databases: [
      { name: "Redis", info: null },
      { name: "MongoDB", info: null },
      { name: "PostgreSQL", info: null },
      { name: "DynamoDB", info: null },
      { name: "MariaDB", info: null },
    ],
    tools: [
      { name: "Material UI", info: null },
      { name: "Vercel", info: null },
      { name: "Unity", info: null },
      { name: "Postman", info: null },
      { name: "Material UI", info: null },
    ],
  },
  experience: {
    languages: [
      { name: "JavaScript", info: "4 Years" },
      { name: "Nodejs", info: "3 Years" },
      { name: "CSS", info: "3 Years" },
      { name: "HTML", info: "3 Years" },
      { name: "TypeScript", info: "1 Year" },
    ],
    frameworks: [
      { name: "React", info: "3 Years" },
      { name: "Express", info: "3 Years" },
      { name: "Discord.js", info: "3 Years" },
      { name: "Fastify", info: "1 Year" },
      { name: "Nextjs", info: "1 Year" },
      { name: "Tailwind", info: "1 Year" },
      { name: "Socket.io", info: "6 Months" },
      { name: "React Native", info: "3 Months" },
      { name: "Chartjs", info: "3 Months" },
    ],
    databases: [
      { name: "PostgreSQL", info: "2 Years" },
      { name: "MongoDB", info: "1 Years" },
      { name: "Redis", info: "6 Months" },
      { name: "Firebase", info: "6 Months" },
      { name: "DynamoDB", info: "2 Months" },
    ],
    tools: [
      { name: "Visual Studio Code", info: "3 Years" },
      { name: "NPM", info: "3 Years" },
      { name: "Github", info: "2 Years" },
      { name: "Linux", info: "2 Years" },
      { name: "Material UI", info: "1 Year" },
      { name: "BitBucket", info: "1 Year" },
      { name: "Postman", info: "1 Year" },
      { name: "Vercel", info: "1 Year" },
      { name: "Strapi", info: "1 Year" },
      { name: "Firebase", info: "6 Months" },
      { name: "Hotjar", info: "1 Month" },
    ],
  },
  mostUsed: {
    languages: [
      { name: "JavaScript", info: "5 Years" },
      { name: "HTML", info: "5 Years" },
      { name: "CSS", info: "5 Years" },
      { name: "Nodejs", info: "4 Years" },
      { name: "Java", info: "3 Years" },
      { name: "Python", info: "2 Years" },
      { name: "C++", info: "2 Years" },
      { name: "C", info: "2 Years" },
      { name: "TypeScript", info: "1 Years" },
      { name: "C#", info: "1 Years" },
      { name: "PHP", info: "1 Year" },
      { name: "Kotlin", info: "8 Months" },
      { name: "Scala", info: "8 Months" },
    ],
    frameworks: [
      { name: "Express", info: "4 Years" },
      { name: "Discord.js", info: "4 Years" },
      { name: "React", info: "3 Years" },
      { name: "Chartjs", info: "3 Years" },
      { name: "Socket.io", info: "2 Years" },
      { name: "React Native", info: "2 Years" },
      { name: "Fastify", info: "2 Year" },
      { name: "Tensorflow", info: "2 Years" },
      { name: "Nextjs", info: "1 Year" },
      { name: "Tailwind", info: "1 Year" },
    ],
    databases: [
      { name: "MySQL", info: "4 Years" },
      { name: "MongoDB", info: "4 Years" },
      { name: "PostgreSQL", info: "3 Years" },
      { name: "SQLite", info: "1 Years" },
      { name: "Redis", info: "1 Year" },
      { name: "Firebase", info: "1 Year" },
      { name: "MariaDB", info: "3 Months" },
      { name: "DynamoDB", info: "2 Months" },
    ],
    tools: [
      { name: "NPM", info: "4 Years" },
      { name: "Github", info: "3 Years" },
      { name: "Linux", info: "3 Years" },
      { name: "Nginx", info: "3 Years" },
      { name: "Visual Studio Code", info: "3 Years" },
      { name: "Material UI", info: "2 Years" },
      { name: "Atom", info: "2 Years" },
      { name: "Postman", info: "2 Years" },
      { name: "BitBucket", info: "1 Year" },
      { name: "Vercel", info: "1 Year" },
      { name: "Strapi", info: "1 Year" },
      { name: "Hotjar", info: "1 Month" },
    ],
  },
  // recentlyLearned: {
  //     languages: [],
  //     frameworks: [],
  //     databases: [],
  //     tools: []
  // },
  studiedAtUniversity: {
    languages: [
      { name: "Java", info: "3 Years" },
      { name: "Python", info: "1 Years" },
      { name: "Kotlin", info: "6 Months" },
      { name: "Scala", info: "6 Months" },
      { name: "JavaScript", info: "3 Months" },
    ],
    frameworks: [
      { name: "Socket.io", info: "1 Year" },
      { name: "Tensorflow", info: "1 Year" },
    ],
    databases: [
      { name: "MySQL", info: "2 Years" },
      { name: "Oracle", info: "6 Months" },
      { name: "SQLite", info: "3 Months" },
    ],
    tools: [
      { name: "NetBeans IDE", info: "3 Years" },
      { name: "JFreeChart", info: "6 Months" },
      { name: "Wireshark", info: "6 Months" },
      { name: "FTK Imager", info: "3 Months" },
      { name: "Autopsy", info: "3 Months" },
    ],
  },
};

const Skills = () => {
  // States showing currently active type and which filter is applied
  const [active, setActive] = useState("languages");
  const [filter, setFilter] = useState("experience");
  return (
    <Container>
      <MessageContainer>
        <MessageTitle>About me</MessageTitle>
        <Message>
          I started programming around 5 years ago and since then I have tested
          and stuck to using a variety of languages, databases, frameworks, and
          tools. Below you can sort through some of the software I have
          consistently used and have commercially worked with.
        </Message>
      </MessageContainer>

      <FilterContainer>
        <FilterList
          name="filter"
          onChange={(event) => setFilter(event.target.value)}
        >
          <FilterListOption value="experience">
            Commercial experience
          </FilterListOption>
          <FilterListOption value="favourite">Favourite</FilterListOption>
          <FilterListOption value="mostUsed">Most used</FilterListOption>
          {/* <FilterListOption value="recent">Recently learned</FilterListOption> */}
          <FilterListOption value="studiedAtUniversity">
            Studied at university
          </FilterListOption>
        </FilterList>
        {(filter === "favourite" ||
          filter === "mostused" ||
          filter === " recent") && (
          <FilterText>
            This is my current top 5 for each section. Lists are updated at the
            end of each month.
          </FilterText>
        )}
      </FilterContainer>

      <StackContainer>
        <OptionsList>
          {["languages", "frameworks", "databases", "tools"].map((title, i) => {
            if (title === active) {
              return (
                <ActiveOption onClick={() => setActive(title)} key={i}>
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </ActiveOption>
              );
            }
            return (
              <Option onClick={() => setActive(title)} key={i}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </Option>
            );
          })}
        </OptionsList>
        <ListContainer>
          {filterList[filter] &&
            filterList[filter][active] &&
            filterList[filter][active].map((item, i) => (
              <ListItemContainer key={i}>
                <LeftContainer>
                  <ItemImageContainer>
                    <ListItem src={Icons[item.name]} alt={item.name} />
                  </ItemImageContainer>
                  <ItemName>{item.name}</ItemName>
                </LeftContainer>
                {item.info && <UsageContainer>{item.info}</UsageContainer>}
              </ListItemContainer>
            ))}
        </ListContainer>
      </StackContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  padding: 10px 5% 30px 5%;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const MessageTitle = styled.div`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;

const Message = styled.div`
  padding-top: 14px;
  padding-right: 15px;
  font-size: 1.06em;
`;

const StackContainer = styled.div`
  flex: 1;
  padding: 0 4%;
  padding-bottom: 50px;
`;

const OptionsList = styled.div`
  width: 100%;
  display: flex;
`;

const Option = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 10px 0;
  max-height: 50px;
  border-bottom: 5px solid #00000000;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid ${(props) => props.theme.colors.highlight};
  }

  @media screen and (max-width: 1100px) {
    font-size: 1em;
  }
`;

const ActiveOption = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  padding: 10px 0;
  max-height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 12px 12px 0 0;
  border-bottom: 5px solid #00000000;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1em;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 0;
  text-align: center;
  border-radius: 0 0 12px 12px;
  min-height: 200px;
  box-shadow: 0 8px 25px -15px rgb(0 0 0 / 80%);
  background-color: ${(props) => props.theme.colors.primary};
`;

const ListItemContainer = styled.div`
  width: 100%;
  min-height: 80px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.light};
`;

const ItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 60px;
  margin: 0 20px;
`;

const ListItem = styled.img`
  width: 50px;
`;

const ItemName = styled.div`
  font-size: 18px;
  margin-left: 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UsageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`;

const FilterContainer = styled.div`
  display: flex;
  padding: 0 4%;
  padding-bottom: 10px;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FilterText = styled.div`
  font-size: 1.1em;
  margin-top: 15px;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.font};

  @media screen and (max-width: 1100px) {
    font-size: 1em;
  }
`;

const FilterList = styled.select`
  width: 100%;
  max-width: 300px;
  padding: 8px;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.font};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }
`;

const FilterListOption = styled.option`
  font-family: "Exo", sans-serif;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.light};
  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;

export default Skills;
