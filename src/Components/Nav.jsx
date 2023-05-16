import React, { Component } from "react";
import LoginModal from "./Modals/LoginModal";
import SignUpModal from "./Modals/SignUpModal";
import { Link } from "react-router-dom";

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
      <div className="flex justify-between px-6 py-5 bg-[#343A40] items-center text-white">
        <Link to="/">blog</Link>
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
          data={this.props.data}
        />
        <SignUpModal
          open={this.state.signUpOpen}
          onClose={this.signUpToggle}
          data={this.props.data}
          fetchData={this.props.fetchData}
        />
      </div>
    );
  }
}
