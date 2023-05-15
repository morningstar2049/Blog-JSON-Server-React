import React, { Component } from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import MostLikedPosts from "./Components/MostLikedPosts";

export default class App extends Component {
  // loginOpen=() =>{
  //   this.setState(prevState => ({loginOpen: !prevState.loginOpen}))
  // }

  render() {
    return (
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/mostLikedPosts" element={<MostLikedPosts />} />
        </Routes>
      </div>
    );
  }
}
