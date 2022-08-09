import { Component } from "react";
import styled, { css } from "styled-components";
import ButtonComponent from "./ButtonComponent";

class App extends Component {
  render() {
    return (
      <div>
        <p>test</p>
        <MyComponent>Hello, MyComponent</MyComponent>
        <MyInput></MyInput>
        <Box>Hello, Box</Box>
        <Button>안녕</Button>
        <Button inverted={true}>테두리만</Button>
        <ButtonComponent />
      </div>
    );
  }
}

const MyComponent = styled.div`
  font-size: 30px;
`;

const MyInput = styled("input")`
  background: gray;
  font-size: 30px;
  margin: 10px;
  `;

const sizes = {
  desktop: 1024,
  tablet: 768
};

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  display: flex;
  padding: 1rem;
  width: 1024px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid black;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
`;

export default App;
