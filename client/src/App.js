import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    redirect: false
  }
  handleLogin = () => {
  
    this.setState({
      redirect: true
    })
  }

  handleRedirect = ()=> {
    if(this.state.redirect){
      return <Redirect to="/login"/>
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        {this.handleRedirect()}
        <h1>Start of app</h1>
        <Router>
          <Route path="/login" exact component={LoginPage} />
        </Router>
        
      </div>
    );
  }
}

export default App;
