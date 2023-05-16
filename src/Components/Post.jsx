import React, { Component } from "react";
import PostContainer from "./PostContainer";

export default class Post extends Component {
  render() {
    return (
      <div className="w-full border-t-2  mt-12">
        <h2 className="font-bold my-4 text-xl">Posts</h2>
        {this.props.currentPosts.length > 0 ? (
          <div className="flex flex-col gap-4">
            <PostContainer
              name="name"
              date="date"
              likes="likes"
              bold="font-bold"
            />{" "}
            {this.props?.currentPosts.map((item) => (
              <PostContainer
                key={item.id}
                name={item.name}
                date={item.date}
                likes={item.likes}
                id={`/posts/${item.id}`}
              />
            ))}
          </div>
        ) : (
          <h2 className="mt-4 text-center font-bold">No posts yet</h2>
        )}
      </div>
    );
  }
}
