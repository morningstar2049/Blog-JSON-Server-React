import { Modal } from "@mui/material";
import React, { Component } from "react";

export default class LoginModal extends Component {
  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[400px] h-[300px] shadow-lg bg-white rounded-xl p-6 ">
          blablabla
        </div>
      </Modal>
    );
  }
}
