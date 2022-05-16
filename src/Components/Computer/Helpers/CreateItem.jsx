// Import node_modules
import React, { useState } from "react";
import styled from "styled-components";

const CreateItem = ({ data, createItem, closeMenu, type }) => {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  // Check the name user has input and check if it already exists on desktop
  const checkInput = () => {
    if (input.length < 1) return;
    let files = data.desktop.map((x) => x.name.toLowerCase());
    if (files.includes(input.toLowerCase())) {
      return setError(true); // Error this name already exists
    }
    setError(false);
    setInput("");
    createItem(input, type);
  };

  return (
    <Container style={!type ? { display: "none" } : {}}>
      <Modal>
        <InputContainer>
          <Title>New {!type ? null : type.toLowerCase()} name</Title>
          <Input
            value={input}
            placeholder={type + " name"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkInput();
              }
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Error
            style={error === false ? { display: "none" } : { display: "block" }}
          >
            {type} already exists
          </Error>
        </InputContainer>
        <ButtonContainer>
          <Button onClick={() => [setError(false), setInput(""), closeMenu()]}>
            Cancel
          </Button>
          <ButtonSecond onClick={() => checkInput()}>Create</ButtonSecond>
        </ButtonContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 350px;
`;

const InputContainer = styled.div`
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.font};
  border: 2px solid ${(props) => props.theme.colors.light};
  border-radius: 5px;
  padding: 2px 0;
  padding-left: 5px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }
`;

const Error = styled.div`
  color: #d83030;
  margin-top: 5px;
  margin-left: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  border-top: 2px solid ${(props) => props.theme.colors.light};
`;

const Button = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  border-right: 2px solid ${(props) => props.theme.colors.light};

  &:hover {
    cursor: pointer;
  }
`;

const ButtonSecond = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 0;

  &:hover {
    cursor: pointer;
  }
`;

export default CreateItem;
