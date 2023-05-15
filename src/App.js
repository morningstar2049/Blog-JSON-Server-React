import React, { Component } from "react";

export default class App extends Component {
  state = {
    email: "",
    name: "",
    pass: "",
    data: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data }));
  }

  postData = () => {
    const content = {
      email: this.state.email,
      pass: this.state.pass,
      name: this.state.name,
      id: this.state.data.at(-1).id + 1,
      posts: [],
    };
    console.log(content);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        pass: this.state.pass,
        name: this.state.name,
        posts: [],
      }),
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          placeholder="name"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <input
          type="email"
          value={this.state.name}
          placeholder="email"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <input
          type="password"
          value={this.state.pass}
          placeholder="password"
          onChange={(e) => {
            this.setState({ pass: e.target.value });
          }}
        />
        <button onClick={this.postData}>click</button>
      </div>
    );
  }
}
