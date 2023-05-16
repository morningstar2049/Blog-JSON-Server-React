import React, { Component } from "react";
import { useParams } from "react-router-dom";

class Profile extends Component {
  state = {
    currentProfile: {},
    currentPosts: [],
  };

  componentDidMount() {
    const { profileId } = this.props.params;
    fetch(`http://localhost:3000/users/${profileId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ currentProfile: data }));

    // TODO: Fetch posts of the current user
  }
  render() {
    return (
      <div className=" p-[50px]">
        <div className=" flex flex-col">
          <img
            src={this.state.currentProfile.image}
            alt="img"
            className="w-[100px]"
          />
          <div>
            {this.state.currentProfile.name} id: {this.state.currentProfile.id}
          </div>
          <div>Posts: {this.state.currentPosts.length}</div>
          <div>Likes: 0</div>
        </div>
        <p>
          <strong>Posts</strong>
        </p>
      </div>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => <Profile {...props} params={useParams()} />;
