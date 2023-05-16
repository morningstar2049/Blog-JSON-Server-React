import React, { Component } from "react";

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
      <div className="flex flex-col gap-8 p-[20px] w-[50%] m-auto">
        {this.state.posts.map((post) => (
          <div className="flex justify-around p-[10px] border-2">
            <div className="flex-1 text-start">{post.name}</div>
            <div className="flex-1 text-center">{post.date}</div>
            <div className="flex-1 text-end">{post.likes}</div>
          </div>
        ))}
      </div>
    );
  }
}
