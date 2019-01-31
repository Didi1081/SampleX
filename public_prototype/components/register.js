'use strict';

const e = React.createElement;

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoginOpen: true,
          isRegisterOpen: false
        };
    }
    
    render() {
    
        return (
            <div className="root-container">
        
            </div>
        );
    }
}

//Login Box
class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitLogin(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      );
    }
  
  }

  //Register Box 
class RegisterBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitRegister(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="login-input" placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitRegister
              .bind(this)}>Register</button>
          </div>
        </div>
      );
    }
  }

  //App Component 
render() {
     <div className="box-container">
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
     </div>
}

// ... the starter code you pasted ...
reactDOM.render(
    <RegistrationContainer />, document.getElementById("root"));

// const domContainer = document.querySelector('#registration_container');
// ReactDOM.render(e(RegistrationContainer), domContainer);