import React, { Component } from "react";

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
            <form onSubmit={this.onSubmit.bind(this)} >
                <input
                  type="text"
                  placeholder="Type element here..."
                  /* Set the state to user input */
                  onChange={event => this.setState({ input: event.target.value })}
                  ref="element"
                />
                <button>Add Element</button>
            </form>
            <p>Value of the input: {this.state.input}</p>
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
