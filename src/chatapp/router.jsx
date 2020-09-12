import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./form";
import Home from "./home";

class Routing extends Component {
  state = {
    username: "",
  };

  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Route path="/" exact>
          <Form
            setUsername={(username) => {
              this.setState({ username: username });
            }}
          />
        </Route>
        <Route path="/room" exact>
          <Home username={this.state.username} />
        </Route>
      </Router>
    );
  }
}

export default Routing;
