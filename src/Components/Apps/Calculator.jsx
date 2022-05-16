// Import node_modules
import React, { useState } from "react";
import styled from "styled-components";

// Import icons
import { HiOutlineBackspace } from "react-icons/hi";

// This thing doesn't really work so I won't really comment it too much
const Calculator = ({}) => {
  const [inputs, setInput] = useState([]);
  const [operator, setOperator] = useState(null);
  const [output, setOutput] = useState("");
  const [selectedOperator, setSelectedOperator] = useState(false);

  const HandleInput = (value) => {
    switch (value) {
      case "backspace": {
        let newOutput = output.slice(0, output.length - 1);
        setOutput(newOutput);
        break;
      }
      case "ce": {
        setOutput("");
        setOperator(null);
        setInput([]);
        break;
      }
      case "c": {
        setOutput("");
        break;
      }
      case "÷": {
        setOperator("÷");
        setInput([...inputs, output]);
        setSelectedOperator(true);
        break;
      }
      case "x": {
        setOperator("x");
        setInput([...inputs, output]);
        setSelectedOperator(true);
        break;
      }
      case "-": {
        setOperator("-");
        setInput([...inputs, output]);
        setSelectedOperator(true);
        break;
      }
      case "+": {
        setOperator("+");
        setInput([...inputs, output]);
        setSelectedOperator(true);
        break;
      }
      case "=": {
        if (!operator) break;
        if (!inputs[0]) {
          if (operator === "÷") {
            let newValue = Number(output) / Number(output);
            setOutput(newValue);
          } else if (operator === "x") {
            let newValue = Number(output) * Number(output);
            setOutput(newValue);
          } else if (operator === "-") {
            let newValue = Number(output) - Number(output);
            setOutput(newValue);
          } else if (operator === "+") {
            let newValue = Number(output) + Number(output);
            setOutput(newValue);
          }
          break;
        }

        if (inputs[0]) {
          if (operator === "÷") {
            let newValue = Number(inputs[0]) / Number(output);
            setOutput(newValue);
          } else if (operator === "x") {
            let newValue = Number(inputs[0]) * Number(output);
            setOutput(newValue);
          } else if (operator === "-") {
            let newValue = Number(inputs[0]) - Number(output);
            setOutput(newValue);
          } else if (operator === "+") {
            let newValue = Number(inputs[0]) + Number(output);
            setOutput(newValue);
          }
        }
        setOperator(null);
        break;
      }
      case ".": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (output.includes(".")) break;
        setOutput(output + value);
        break;
      }
      case "1": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "2": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "3": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "4": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "5": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "6": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "7": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "8": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "9": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
      case "0": {
        if (selectedOperator === true) {
          setOutput("");
          setSelectedOperator(false);
        }
        if (output.length > 15) break;
        if (!output || output.length < 1) {
          break;
        }
        if (operator) {
          setInput([output]);
          setOutput("");
        } else {
          setOutput(output + value);
        }
        break;
      }
    }
  };

  return (
    <Container>
      <ColumnFlex>
        <RowFlex>
          <Output>
            {!output ? "0" : Number(output).toLocaleString()}
            <OperatorContainer>{operator}</OperatorContainer>
          </Output>
          <Button onClick={() => HandleInput("backspace")}>
            <HiOutlineBackspace />
          </Button>
        </RowFlex>
        <RowFlex>
          <Button></Button>
          <Button onClick={() => HandleInput("ce")}>CE</Button>
          <Button onClick={() => HandleInput("c")}>C</Button>
          <Button onClick={() => HandleInput("÷")}>÷</Button>
        </RowFlex>
        <RowFlex>
          <Button onClick={() => HandleInput("7")}>7</Button>
          <Button onClick={() => HandleInput("8")}>8</Button>
          <Button onClick={() => HandleInput("9")}>9</Button>
          <Button onClick={() => HandleInput("x")}>x</Button>
        </RowFlex>
        <RowFlex>
          <Button onClick={() => HandleInput("4")}>4</Button>
          <Button onClick={() => HandleInput("5")}>5</Button>
          <Button onClick={() => HandleInput("6")}>6</Button>
          <Button onClick={() => HandleInput("-")}>-</Button>
        </RowFlex>
        <RowFlex>
          <Button onClick={() => HandleInput("1")}>1</Button>
          <Button onClick={() => HandleInput("2")}>2</Button>
          <Button onClick={() => HandleInput("3")}>3</Button>
          <Button onClick={() => HandleInput("+")}>+</Button>
        </RowFlex>
        <RowFlex>
          <Button></Button>
          <Button onClick={() => HandleInput("0")}>0</Button>
          <Button onClick={() => HandleInput(".")}>.</Button>
          <Button onClick={() => HandleInput("=")}>=</Button>
        </RowFlex>
      </ColumnFlex>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
`;

const RowFlex = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.light};
  font-size: 2.5vw;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Output = styled.div`
  flex: 3;
  max-width: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.light};
  font-size: 2.5vw;
  position: relative;
`;

const OperatorContainer = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  font-size: 1.3vw;
`;

export default Calculator;
