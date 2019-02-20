import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from "./containers/loginPage";
import CreateAccount from "./containers/createAccountPage";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import LoggedIn from "./containers/loggedIn";
import Headers from "./components/header"
import Home from "./containers/home";
class App extends Component {

  render() {
    
    return (

      <BrowserRouter>
        <div>
        <Route path="/" component={Headers}/>
          <Switch>
           
            <Route exact path="/createAccount" component={CreateAccount} />
            <Route exact path="/loggedIn" component={LoggedIn} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
