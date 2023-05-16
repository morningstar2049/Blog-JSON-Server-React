import React, { Component } from "react";
import { Modal } from "@mui/material";
import moment from "moment";
const INPUT_STYLES =
  "px-2 py-1 border-[1px] w-full rounded-sm border-black my-2 rounded-md";

export default class SIgnUpModal extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    image: "",
    error: "",
  };

  postData = () => {
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.password ||
      !this.state.image
    ) {
      this.setState({ error: "please fill all the blanks" });
    } else if (
      this.props.data.some((item) => item.email === this.state.email)
    ) {
      this.setState({ error: "User with this email already exists" });
    } else {
      const content = {
        email: this.state.email,
        password: this.state.password,
        image: this.state.image,
        name: this.state.name,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      })
        .then((res) => res.json())
        .then((data) => {
          this.props.fetchData();
        });

      this.setState({
        name: "",
        email: "",
        password: "",
        image: "",
        error: "",
      });
      this.props.onClose();
    }
  };

  formChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[400px]  shadow-lg bg-white rounded-xl p-6 ">
          <h2 className="font-bold text-center mb-4 ">Registration</h2>
          <input
            type="text"
            placeholder="name"
            name="name"
            className={INPUT_STYLES}
            onChange={this.formChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className={INPUT_STYLES}
            onChange={this.formChange}
          />
          <input
            type="text"
            placeholder="image url"
            className={INPUT_STYLES}
            name="image"
            onChange={this.formChange}
          />
          <input
            type="password"
            placeholder="password"
            className={INPUT_STYLES}
            name="password"
            onChange={this.formChange}
          />
          <div className="flex justify-center m-auto mt-4  ">
            <button
              onClick={this.postData}
              className="w-[200px] min-w-[200px]  border-2 rounded-md  bg-[#007BFF] font-bold text-white py-2  "
            >
              Sign Up
            </button>
          </div>
          <p className="text-red-500 text-xs text-center">{this.state.error}</p>
        </div>
      </Modal>
    );
  }
}
