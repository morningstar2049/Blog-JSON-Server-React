import React, { Component } from "react";
import User from "./User";

export default class Main extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => this.setState({ usersData: data }));
  }

  render() {
    return (
      <div className="p-[50px] grid grid-cols-3 md:grid-cols-5 gap-20">
        {this.state.usersData.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            imgUrl="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          />
        ))}
      </div>
    );
  }
}
