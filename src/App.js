import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from "./containers/loginPage";
import CreateAccount from "./containers/createAccountPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>I SHOULD BE A HEADER</div>
        <Loginpage />
        <CreateAccount />
      </div>
    );
  }
}

export default App;
