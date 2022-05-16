// Import node_modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";

// Editor created using @monaco-editor/react
const VsEditor = ({ content, updateFile }) => {
  let [value, setValue] = useState("// Code goes here");
  useEffect(() => {
    if (content) {
      setValue(content.content);
    }
  }, [content]);

  return (
    <Container
      onKeyDown={(e) => {
        if (content) {
          if (e.ctrlKey && e.key === "s") {
            e.preventDefault();
            let newFile = content;
            newFile.content = value;
            updateFile(newFile);
          }
        }
      }}
    >
      {content ? (
        <MenuContainer>
          <MenuItem onClick={() => navigator.clipboard.writeText(value)}>
            Copy
          </MenuItem>
          <MenuItem
            onClick={() => {
              if (content) {
                let newContent = content;
                newContent.content = value;
                updateFile(newContent);
              }
            }}
          >
            Save
          </MenuItem>
        </MenuContainer>
      ) : null}
      <Content>
        <Editor
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="// Code goes here"
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
`;

const MenuItem = styled.div`
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  padding: 3px 15px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export default VsEditor;
