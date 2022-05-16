// Import node_modules
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TextEditor = ({ content, updateFile }) => {
  const [value, setValue] = useState(content.content);

  useEffect(() => {
    setValue(content.content);
  }, [content]);

  return (
    <Container
      onKeyDown={(e) => {
        if (e.ctrlKey && e.key === "s") {
          e.preventDefault();
          let newFile = content;
          newFile.content = value;
          updateFile(newFile);
        }
      }}
    >
      <MenuContainer>
        <MenuItem onClick={() => navigator.clipboard.writeText(value)}>
          Copy
        </MenuItem>
        <MenuItem
          onClick={() => {
            let newFile = content;
            newFile.content = value;
            updateFile(newFile);
          }}
        >
          Save
        </MenuItem>
        <MenuItem>Exit</MenuItem>
      </MenuContainer>
      <InputContainer>
        <Input
          value={value}
          autoComplete="off"
          spellCheck="false"
          onChange={(event) => setValue(event.target.value)}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
`;

const MenuItem = styled.div`
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  padding: 3px 15px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Input = styled.textarea`
  flex: 1;
  outline: none;
  border: none;
  resize: none;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.font};
  padding: 5px;
  border-radius: 5px;
  font-family: "Exo", sans-serif;
  font-size: 16px;
`;

export default TextEditor;
