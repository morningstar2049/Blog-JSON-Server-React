import { Modal } from "@mui/material";
import React, { Component } from "react";

export default class SignUpModal extends Component {
  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div className="absolute bg-red-600 w-[96px] h-[200px]">blablabla</div>
      </Modal>
    );
  }
}
