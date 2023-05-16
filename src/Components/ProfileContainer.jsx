import React, { Component } from "react";

export default class ProfileContainer extends Component {
  getTotalLikes = () => {
    return this.props.currentPosts.reduce((acc, cur) => {
      return acc + cur.likes;
    }, 0);
  };
  render() {
    return (
      <div className=" flex flex-col items-center">
        <img
          src={this.props.currentProfile.image}
          alt="img"
          className="w-[200px] rounded-lg"
        />
        <div className="mt-4 flex flex-col gap-2">
          <h2>
            <span className="font-bold">name: </span>{" "}
            {this.props.currentProfile.name}
          </h2>
          <h2>
            <span className="font-bold">id: </span>{" "}
            {this.props.currentProfile.id}
          </h2>
          <h2>
            <span className="font-bold">Posts: </span>{" "}
            {this.props.currentPosts.length}
          </h2>
          <h2>
            <span className="font-bold">Likes: </span> {this.getTotalLikes()}
          </h2>
        </div>
      </div>
    );
  }
}
