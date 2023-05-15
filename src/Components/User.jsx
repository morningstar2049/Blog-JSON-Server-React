import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    return (
      <div className="shadow-lg flex flex-col items-center gap-5 p-[20px]">
        <img src={this.props.imgUrl} alt="img" className="w-[100px]" />
        <p>{this.props.name}</p>
        <Link to={`profile/${this.props.id}`}>
          <button className="bg-[#007bff] text-white font-bold p-[10px] rounded-md w-[fit-content]">
            Click to view Profile
          </button>
        </Link>
      </div>
    );
  }
}

export default User;
