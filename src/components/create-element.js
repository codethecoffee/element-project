import React, { Component } from "react";
import { Input, Button, ElementCounter } from "../styles";


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
              <ElementCounter>Number of elements: {this.props.elements.length}</ElementCounter>
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
