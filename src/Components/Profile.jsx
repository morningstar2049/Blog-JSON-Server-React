import React, { Component } from "react";
import { withParams } from "../hoc/withParams";
import ProfileContainer from "./ProfileContainer";
import AddPost from "./AddPost";
import Post from "./Post";
class Profile extends Component {
  state = {
    currentProfile: {},
    currentPosts: [],
  };

  fetchPosts = () => {
    const { profileId } = this.props.params;
    fetch(`http://localhost:3000/posts?authorId=${profileId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ currentPosts: data }));
  };

  componentDidMount() {
    const { profileId } = this.props.params;
    fetch(`http://localhost:3000/users/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ currentProfile: data });
      });
    this.fetchPosts();
  }

  render() {
    return (
      <div className=" p-[50px]">
        {this.props.loggedUserId === this.state.currentProfile.id ? (
          <AddPost
            currentProfile={this.state.currentProfile}
            fetchPosts={this.fetchPosts}
          />
        ) : (
          <ProfileContainer
            currentProfile={this.state.currentProfile}
            currentPosts={this.state.currentPosts}
          />
        )}
        <Post currentPosts={this.state.currentPosts} />
      </div>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default withParams(Profile);
