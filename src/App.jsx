import React, { Component } from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import PostDetail from "./Components/PostDetail";
import MostLikedPosts from "./Components/MostLikedPosts";

export default class App extends Component {
  state = {
    currentProfile: false,
    data: [],
  };

  fetchData = () => {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data: data }));
  };

  componentDidMount() {
    this.fetchData();
  }

  log = (current) => {
    this.setState({ currentProfile: current });
  };

  render() {
    return (
      <div>
        <Nav
          data={this.state.data}
          fetchData={this.fetchData}
          currentProfile={this.state.currentProfile}
          log={this.log}
        />

        <Routes>
          <Route path="/" element={<Main data={this.state.data} />} />
          <Route
            path="/profile/:profileId"
            element={<Profile loggedUserId={this.state.currentProfile.id} />}
          />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/mostLikedPosts" element={<MostLikedPosts />} />
        </Routes>
      </div>
    );
  }
}
