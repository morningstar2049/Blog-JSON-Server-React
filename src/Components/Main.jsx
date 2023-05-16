import React, { Component } from "react";
import User from "./User";

export default class Main extends Component {
  render() {
    return (
      <div className="p-[50px] grid grid-cols-3 md:grid-cols-5 gap-20">
        {this.props.data.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            imgUrl={user.image}
          />
        ))}
      </div>
    );
  }
}
