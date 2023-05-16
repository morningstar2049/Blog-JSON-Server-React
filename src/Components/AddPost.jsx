import React, { Component } from "react";
import moment from "moment";

export default class extends Component {
  state = {
    name: "",
    content: "",
    error: "",
  };

  formChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addPost = () => {
    if (!this.state.name.trim() || !this.state.content.trim()) {
      this.setState({ error: "please fill all the blanks" });
    } else {
      const content = {
        name: this.state.name,
        content: this.state.content,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        author: this.props.currentProfile.name,
        likes: 0,
        authorId: this.props.currentProfile.id,
      };
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      }).then(() => {
        this.props.fetchPosts();
      });

      this.setState({ name: "", content: "", error: "" });
    }
  };
  render() {
    return (
      <div className="flex flex-col p-6 mb-10">
        <h2 className="font-bold text-center mb-4">
          {this.props.currentProfile.name}
        </h2>
        <input
          type="text"
          placeholder="Post Name"
          value={this.state.name}
          name="name"
          onChange={this.formChange}
          className="border-2 w-[50%] min-w-[250px] m-auto px-2 py-1 rounded-lg "
        />
        <textarea
          placeholder="Post Content"
          value={this.state.content}
          rows={5}
          name="content"
          onChange={this.formChange}
          className="border-2 w-[50%] min-w-[250px] m-auto px-2 py-1 rounded-lg mt-4 "
        />
        <div className="flex w-full justify-center mt-4">
          <button
            onClick={this.addPost}
            className="w-[200px] min-w-[200px]  border-2 rounded-md  bg-[#007BFF] font-bold text-white py-2  "
          >
            add post
          </button>
        </div>
      </div>
    );
  }
}
