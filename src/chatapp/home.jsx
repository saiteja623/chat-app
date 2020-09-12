import React, { Component } from "react";
import io from "socket.io-client";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  Fab,
  Hidden,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./css/chat.css";
import GroupIcon from "@material-ui/icons/Group";

class Home extends Component {
  constructor(props) {
    super(props);
    this.chatboxRef = React.createRef();
  }

  state = {
    connected: false,
    messages: [],
    src: null,
    username: "saiteja",
    activeMsg: "",
    persons: 0,
  };
  componentDidUpdate = () => {
    this.scrollIntoViewmsg();
  };
  componentDidMount = () => {
    this.socket = io("https://chat-app-using-node.herokuapp.com");
    this.socket.on("new-other-user-connected", (name) => {
      for (var i = 0; i < 1; i++) {
        var o = {
          name: name,
          msg: "Joined",
        };
        var messages = this.state.messages;
        messages.push(o);
        this.setState({ messages });
        this.setState({ persons: this.state.persons + 1 });
      }
    });
    this.socket.on("msg-by-other", (data) => {
      for (var i = 0; i < 1; i++) {
        var o = {
          name: data.name,
          msg: data.message,
        };
        console.log("msg by ", data.name, data.message);
        var messages = this.state.messages;
        messages.push(o);
        console.log(messages);
        this.setState({ messages });
      }
    });
    this.socket.on("disconnected", (name) => {
      var o = {
        name: name,
        msg: "left",
      };
      var messages = this.state.messages;
      messages.push(o);
      console.log(messages);
      this.setState({ messages });
      this.setState({ persons: this.state.persons - 1 });
    });
    this.socket.on("number-of-users", (obj) => {
      var persons = Object.keys(obj).length;
      this.setState({ persons });
    });
    this.setState({ username: this.props.username });
    this.submitName();
  };

  //scroll last msg into view
  scrollIntoViewmsg = () => {
    this.chatboxRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //submit the name
  submitName = () => {
    var o = {
      name: "You ",
      msg: "Joined",
    };
    var messages = this.state.messages;
    messages.push(o);
    console.log(messages);
    this.setState({ messages });
    this.setState({ connected: true });
    this.socket.emit("new-user-connected", this.props.username);
  };

  //send the message
  sendMessage = () => {
    if (
      this.state.activeMsg !== "" &&
      this.state.activeMsg.indexOf(" ") !== ""
    ) {
      this.scrollIntoViewmsg();
      var o = {
        name: "You",
        msg: this.state.activeMsg,
      };
      var messages = this.state.messages;
      messages.push(o);
      console.log(messages);
      this.setState({ messages });
      this.socket.emit("send-message", this.state.activeMsg);
      this.setState({ activeMsg: "" });
    }
  };
  render() {
    return (
      <Paper className="chat-paper" elevation={3}>
        <Grid
          style={{
            width: "100%",
            height: "100%",
          }}
          direction="column"
        >
          <Grid
            item
            container
            className="chat-nav"
            xs={12}
            style={{ height: "10%" }}
          >
            <Grid item xs={2} sm={1}>
              <GroupIcon
                size="small"
                style={{ color: "white", margin: "10px 13px" }}
              />
            </Grid>
            <Grid item xs={10} sm={11}>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  paddingLeft: "10px",
                  paddingTop: "4px",
                }}
              >
                Group Chat
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "white", paddingLeft: "10px" }}
                gutterBottom
              >
                {this.state.persons} people in the chat
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ overflowY: "scroll", overflowX: "hidden", height: "80%" }}
          >
            {this.state.messages.map((e, index) => {
              if (e.msg == "Joined" || e.msg == "left") {
                return (
                  <div className="joined-msg">
                    {e.name} {e.msg}
                  </div>
                );
              } else if (e.name == "You") {
                return (
                  <div className="msg-by-admin">
                    <Typography variant="body2">{e.msg}</Typography>
                  </div>
                );
              } else {
                return (
                  <div className="msg-by-other">
                    <div className="sender-name">
                      <Typography variant="body2">{e.name}</Typography>{" "}
                    </div>

                    <Typography variant="body2">{e.msg}</Typography>
                  </div>
                );
              }
            })}
            <div style={{ width: "100%" }} ref={this.chatboxRef}></div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ height: "12%", padding: "0px 6px", paddingTop: "10px" }}
            className="bottom-grid"
          >
            <Grid
              item
              container
              xs={12}
              justify="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10} sm={10}>
                <input
                  type="text"
                  placeholder="Enter Message.."
                  value={this.state.activeMsg}
                  onChange={(e) => {
                    this.setState({ activeMsg: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (e.keyCode == 13) {
                      this.sendMessage();
                    }
                  }}
                />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Hidden xsDown>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={this.sendMessage}
                  >
                    Send
                  </Button>
                </Hidden>
                <Hidden smUp>
                  <Fab
                    size="small"
                    color="primary"
                    style={{ width: "35px", height: "20px" }}
                    onClick={this.sendMessage}
                  >
                    <SendIcon style={{ fontSize: "0.9rem" }} color="white" />
                  </Fab>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default Home;
