import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import GlobalStyle from "./Global";
import { Heading, Button, CanceButton } from "./elements";

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
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
