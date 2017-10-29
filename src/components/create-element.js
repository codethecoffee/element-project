import React, { Component } from "react";
import { Input, Button } from "../styles";


class CreateElement extends Component {

    constructor (props) {
      super(props);
      this.state = {
        input: ""
      };
    }

    render () {
        return (
          <div>
            <center>
              <form onSubmit={this.onSubmit.bind(this)} >
                  <Input
                    type="text"
                    placeholder="Type element here..."
                    /* Set the state to user input */
                    onChange={event => this.setState({ input: event.target.value })}
                    ref="element"
                  />
                  <Button>Add Element</Button>
              </form>
              <p>Value of the input: {this.state.input}</p>
            </center>
          </div>
        );
    }
    onSubmit (e) {
        /* Add element that user typed in */
        this.props.addElement(this.state.input);
        /* Set the value of the input back to an empty string */
        this.setState( { input: "" } );
    }
}

export default CreateElement;
