import React, { Component } from "react";
import SignUpModal from "./Modals/SignUpModal";
import LoginModal from "./Modals/LoginModal";

export default class Nav extends Component {
  state = {
    loginOpen: false,
    signUpOpen: false,
  };

  loginToggle = () => {
    this.setState((prevState) => ({ loginOpen: !prevState.loginOpen }));
  };

  signUpToggle = () => {
    this.setState((prevState) => ({ signUpOpen: !prevState.signUpOpen }));
  };
  render() {
    return (
      <div>
        Nav
        <div>
          <button onClick={this.loginToggle} className="mr-8">
            login
          </button>
          <button onClick={this.signUpToggle}>sign up</button>
        </div>
        <LoginModal open={this.state.loginOpen} onClose={this.loginToggle} />
        <SignUpModal open={this.state.signUpOpen} onClose={this.signUpToggle} />
      </div>
    );
  }
}
