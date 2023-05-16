import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostContainer extends Component {
  render() {
    return (
      <Link to={this.props.id}>
        <div
          className={`py-2 px-4 flex w-[50%] min-w-[300px] m-auto justify-between rounded-md shadow-md bg-gray-300 ${
            this.props.bold ? "bg-yellow-500" : "cursor-pointer"
          }`}
        >
          <div className={`flex-1  ${this.props.bold} text-start`}>
            {this.props.name}
          </div>
          <div className={`${this.props.bold} text-center flex-1`}>
            {this.props.date}
          </div>
          <div className={`${this.props.bold} text-end flex-1`}>
            {this.props.likes}
          </div>
        </div>
      </Link>
    );
  }
}
