import React, { Component } from "react";
import LoginModal from "./Modals/LoginModal";
import SignUpModal from "./Modals/SignUpModal";

export default class Nav extends Component {
  state = {
    loginOpen: false,
    signUpOpen: false,
    data: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data }));
  }

  fetchData = () => {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data }));
  };

  loginToggle = () => {
    this.setState((prevState) => ({ loginOpen: !prevState.loginOpen }));
  };

  signUpToggle = () => {
    this.setState((prevState) => ({ signUpOpen: !prevState.signUpOpen }));
  };
  render() {
    return (
      <div className="flex justify-between px-6 py-5 bg-[#343A40] items-center text-white">
        <h2>blog</h2>
        <div className="flex gap-2">
          <h2>authors</h2>
          <h2>most liked</h2>
        </div>
        {this.props.currentProfile ? (
          <div className="flex gap-4 items-center">
            {this.props.currentProfile.name}
            <img
              src={this.props.currentProfile.image}
              alt="avatar"
              className="w-8 aspect-square rounded-full"
            />
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={this.loginToggle}
              className="py-2 px-4 border-white border-[1px] rounded-lg"
            >
              login
            </button>
            <button
              className="py-2 px-4 border-white border-[1px] rounded-lg"
              onClick={this.signUpToggle}
            >
              sign up
            </button>
          </div>
        )}

        <LoginModal
          open={this.state.loginOpen}
          onClose={this.loginToggle}
          log={this.props.log}
          data={this.state.data}
        />
        <SignUpModal
          open={this.state.signUpOpen}
          onClose={this.signUpToggle}
          data={this.state.data}
          fetchData={this.fetchData}
        />
      </div>
    );
  }
}
