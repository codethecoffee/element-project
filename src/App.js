import React, { Component } from "react";
import ElementsList from "./components/elements-list";
import ElementsListHeader from "./components/elements-list-header";
import CreateElement from "./components/create-element";

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            elements: []
        };
    }

    addElement = (element) => {

      /* Remove whitespace from both sides of the string for clean result */
      element = element.trim();
      /* If nothing was typed, do not add anything */
      if (!element) { return; }
      /* Add new element to the array */
      var new_array = this.state.elements;
      new_array.push(element);
      /* Update the state with the new array */
      this.setState( { elements: new_array } );

    }

    deleteElement (index) {
      var new_array = this.state.elements;
      /* Remove one element at specified index using splice function */
      new_array.splice(index, 1);
      /* Update the state */
      this.setState({ elements: new_array });
    }

    render () {
        return (
            <div>
                <ElementsListHeader />
                <CreateElement
                    elements={this.state.elements}
                    addElement={this.addElement.bind(this)}
                />
                <ElementsList
                    elements={this.state.elements} /* Pass all of the data + functions as props */
                    deleteElement={this.deleteElement.bind(this)}
                />
            </div>
        );
    }
}

export default App;
