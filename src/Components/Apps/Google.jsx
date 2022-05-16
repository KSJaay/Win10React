// Import node_modules
import React, { useState } from "react";
import styled from "styled-components";
// Import icons
import { AiOutlineHome, AiOutlineReload } from "react-icons/ai";

const Google = () => {
  // Filter url to ones which work with iframe
  let [url, setURL] = useState("https://www.google.com");
  let [baseURL, setBaseURL] = useState("https://www.google.com/webhp?igu=1");
  const keyType = (e) => {
    if (e.key === "Enter") {
      let newurl = e.target.value;
      newurl = newurl.trim();
      if (newurl.length === 0) return;
      if (newurl.indexOf("http://") !== 0 && newurl.indexOf("https://") !== 0) {
        newurl = "https://" + newurl;
      }
      newurl = encodeURI(newurl);
      if (newurl.includes("google.com")) {
        newurl = "https://www.google.com/webhp?igu=1";
      }
      setBaseURL(newurl);
    }
  };

  const refreshChrome = () => {
    document.getElementById("chrome-iframe").src += "";
  };

  const goHome = () => {
    setBaseURL("https://www.google.com/webhp?igu=1");
    setURL("https://www.google.com");
    refreshChrome();
  };

  return (
    <Container>
      <TitleContainer>
        <IconContainer>
          <Icon onClick={refreshChrome}>
            <AiOutlineReload size={23} />
          </Icon>
          <Icon onClick={goHome}>
            <AiOutlineHome size={24} />
          </Icon>
        </IconContainer>
        <InputURLContainer>
          <InputURL
            value={url}
            onKeyDown={keyType}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
        </InputURLContainer>
      </TitleContainer>
      <IframeContainer>
        <iframe
          src={baseURL}
          width="100%"
          height="100%"
          frameBorder="0"
          title="KSJaay Chrome"
          id="chrome-iframe"
        />
      </IframeContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 3px 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    cursor: pointer;
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const InputURLContainer = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const InputURL = styled.input`
  height: 20px;
  width: 100%;
  padding: 2px 5px;
  margin-right: 25px;
  font-size: 14px;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.font};
  border-radius: 12px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }
`;

const IframeContainer = styled.div`
  flex: 1;
  border: none;
`;

export default Google;
