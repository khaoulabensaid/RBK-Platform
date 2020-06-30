import React, { Component } from "react";

import io from "socket.io-client";
import "./ChatRoom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const socket = io.connect("http://localhost:3000");

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
      chat: [],
      name: "",
      role: "HIR",
      curTime: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    socket.on("chat message", ({ name, role, msg }) => {
      this.setState({
        chat: [...this.state.chat, { name, role, msg }],
      });
    });
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const { name, role, msg } = this.state;
    socket.emit("chat message", { name, role, msg });
    this.setState({ msg: "" , curTime: new Date().toLocaleString()});
  };

  renderChat() {
    const chat = this.state.chat;
    return chat.map(({ name, role, msg }, idx) => (
      <div
        key={idx}
        className="divMessage"
        style={{
          border: "2px solid #dedede",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px 0",
        }}
      >
        <span>{role}</span>
        <span style={{ color: "green" }}> {name} : </span>

        <span style={{ color: "#999" }}>{msg}</span>
        <span style={{ float: "right" }}>at: {this.state.curTime}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>General chat</h1>
        </div>

        <div
          style={{
            overflowY: "scroll",
            border: "1px solid black",
            width: "600px",

            height: "550px",
            position: "relative",
            display: "block",
            margin: "0 auto",
          }}
        >
          {this.renderChat()}
        </div>
        <div style={{ textAlign: "center" }}>
          <span>name</span>
          <input
            name="name"
            onChange={(e) => this.onTextChange(e)}
            value={this.state.name}
          />

          {/* <input
          name="msg"
          onChange={(e) => this.onTextChange(e)}
          value={this.state.msg}
          placeholder='Enter a message...'
        />
        <Button onClick={this.onMessageSubmit} >Send</Button> */}
          <div
            className="input-group mb-3"
            style={{ width: "55%", margin: "0 auto" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter a message..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="msg"
              onChange={(e) => this.onTextChange(e)}
              value={this.state.msg}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-success"
                type="button"
                onClick={this.onMessageSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
