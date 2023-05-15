import { Modal } from "@mui/material";
import React, { Component } from "react";
const INPUT_STYLES =
  "px-2 py-1 border-[1px] w-full rounded-sm border-black my-2 rounded-md";

export default class LoginModal extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  formChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signIn = () => {
    const indexOfCurEmail = this.props.data.filter(
      (item) => item.email === this.state.email
    );

    if (!this.state.email || !this.state.password) {
      this.setState({ error: "please fill all the blank" });
    } else if (!indexOfCurEmail.length) {
      this.setState({ error: "User with this email doesnt exists" });
    } else if (indexOfCurEmail[0].password !== this.state.password) {
      this.setState({ error: "password doesnt match" });
    } else {
      this.props.log(indexOfCurEmail[0]);
      this.props.onClose();
      this.setState({
        data: [],
        email: "",
        password: "",
        error: "",
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[400px]  shadow-lg bg-white rounded-xl p-6 ">
          <h2 className="font-bold text-center mb-4 ">Log into your account</h2>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
            className={INPUT_STYLES}
            onChange={this.formChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            className={INPUT_STYLES}
            onChange={this.formChange}
          />
          <div className="flex justify-center m-auto mt-4  ">
            <button
              onClick={this.signIn}
              className="w-[200px] min-w-[200px]  border-2 rounded-md  bg-[#007BFF] font-bold text-white py-2  "
            >
              Log In
            </button>
          </div>
          <p className="text-red-500 text-xs text-center">{this.state.error}</p>
        </div>
      </Modal>
    );
  }
}
