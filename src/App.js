import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

// ====================================================================================================== //
// media query //
// ====================================================================================================== //
const sizes = {
  small: 400,
  medium: 960,
  large: 1140
};

const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {});

console.log('above', above);

const Heading = styled.h1`
  font-size: 2rem;
  ${above.medium`
    color: blue
  `}
`;
// ====================================================================================================== //
// extending component //
// ====================================================================================================== //
const Fake = ({ className }) => (
  <div className={className}>
    <h2>This is a fake component</h2>
  </div>
);

const DoubleFake = styled(Fake)`
  color: red;
`;

// ====================================================================================================== //
// Nesting & extending//
// ====================================================================================================== //
const AppWrapper = styled.div`
  header {
    background: teal;
  }

  ${Button} {
    margin-bottom: 2rem;
  }
`;

// ====================================================================================================== //
// Mixins //
// ====================================================================================================== //
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`;

// ====================================================================================================== //
// Variables & extending //
// ====================================================================================================== //
const color = "white";
const Button = styled.button`
  padding: 5px 10px;
  border: 0;
  font-size: 1.6rem;
  color: ${color};
  border-radius: 5px;
  background: indigo;
`;

const CanceButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <Button>this is a button</Button>
          <CanceButton top="100">Cancel</CanceButton>
          <Fake />
          <DoubleFake />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppWrapper>
    );
  }
}

export default App;
