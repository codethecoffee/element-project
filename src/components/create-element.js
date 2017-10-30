import React, { Component } from "react";
import { Input, Button, Message } from "../styles";


class CreateElement extends Component {

    constructor (props) {
      super(props);

      this.state = {
        input: ""
      };

      console.log("Length of the list: ", this.props.elements.length);
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
              <Message><b>Number of elements:</b> {this.props.elements.length}</Message>
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
