import React, { Component } from "react";
import { Input, Button, Message } from "../styles";

class CreateElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              placeholder="Type element here..."
              /* Set the state to user input */
              value={this.state.input}
              onChange={(event) => this.setState({ input: event.target.value })}
              ref="input"
            />
            <Button>Add Element</Button>
          </form>
          <Message>
            <b>Number of elements:</b> {this.props.elements.length}
          </Message>
        </center>
      </div>
    );
  }

  onSubmit = event => {
    event.preventDefault();
    /* Add element that user typed in */
    this.props.addElement(this.state.input);
    /* Set the value of the input back to an empty string */
    this.setState( { input: "" } );
  };
}

export default CreateElement;
