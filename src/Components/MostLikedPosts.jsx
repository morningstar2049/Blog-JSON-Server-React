import React, { Component } from "react";
import PostContainer from "./PostContainer";

export default class MostLikedPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/posts?_sort=likes&_order=desc")
      .then((res) => res.json())
      .then((data) => {
        let fetchedPosts = data;
        if (fetchedPosts.length > 10) {
          fetchedPosts = fetchedPosts.slice(0, 10);
        }
        this.setState({ posts: fetchedPosts });
      });
  }

  render() {
    return (
      <div className="flex flex-col gap-8 p-[20px] m-auto">
        {this.state.posts.map((post) => (
          <PostContainer
            name={post.name}
            date={post.date}
            likes={post.likes}
            key={post.id}
            id={`/posts/${post.id}`}
          />
        ))}
      </div>
    );
  }
}
