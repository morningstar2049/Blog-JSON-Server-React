import React, { Component } from "react";
import { withParams } from "../hoc/withParams";

class PostDetail extends Component {
  state = {
    post: {},
  };

  reaction = (arg) => {
    const { postId } = this.props.params;
    const likes =
      arg === "like"
        ? [...this.state.post.likes, this.props.currentProfile.id]
        : this.state.post.likes.filter(
            (item) => item !== this.props.currentProfile.id
          );

    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        likes: likes,
      }),
    }).then(() => {
      this.fetchData();
    });
    // .then((data) => this.setState({ post: data }));
  };

  fetchData = () => {
    const { postId } = this.props.params;
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ post: data }));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="py-[50px] my-[50px] bg-[rgba(0,0,0,.8)] rounded-md text-white">
        <div className="flex flex-col gap-5 items-center w-[80vw] min-w-[300px] m-auto p-[10px]">
          <div className="font-bold text-3xl">{this.state.post.name}</div>
          <p className="text-start">{this.state.post.content}</p>
          <div className="flex flex-col gap-2">
            <div>
              <strong>Author : </strong> {this.state.post.author}
            </div>
            <div>
              <strong>Date : </strong> {this.state.post.date}
            </div>
            <div>
              <strong>Likes :</strong> {this.state.post.likes?.length}
            </div>
          </div>

          <button
            onClick={() => {
              this.state.post.likes?.indexOf(this.props.currentProfile.id) ===
              -1
                ? this.reaction("like")
                : this.reaction("dislike");
            }}
            disabled={!this.props.currentProfile}
            className={`bg-[#007bff] text-white font-bold p-[10px] rounded-md w-[80px] ${
              !this.props.currentProfile && "cursor-not-allowed"
            }`}
          >
            {this.state.post.likes?.indexOf(this.props.currentProfile.id) === -1
              ? "Like"
              : "Dislike"}
          </button>
        </div>
      </div>
    );
  }
}

export default withParams(PostDetail);
