import React, { Component } from "react";
import ElementsList from "./components/elements-list";
import ElementsListHeader from "./components/elements-list-header";
import CreateElement from "./components/create-element";

/* FUNCTIONS FOR LOCAL STORAGE OF DATA */
/* My general approach: Store data (list of elements) in localStorage. Convert the JS object into JSON string then save to local storage. Parse the JSON string upon retrieval. */

const elements = {
    items: [],

    /* Fill items variable with data from local store */
    populate () {
        this.items = this.get();
        console.log("Local data has been retrieved!", this.items);
    },

    /* Access (a.k.a. get) the data that is stored in the local store */
    get () {
        try {
           return JSON.parse(localStorage.getItem(this.localStorage))  /* Parse the data saved to local store so that it is in the form of an array again */
        } catch (error) {
          return []; /* In the case that there is nothing in the local store, return an empty array so that the value is not undefined */
        }
    },

    /* Save the data to local store */
    save () {
      /* This setItem function will allow you to access your list of elements, even if you close out of your tab and reopen it! */
        localStorage.setItem(this.localStorage, JSON.stringify(this.items));
        console.log("New list of elements saved to local storage", JSON.stringify(this.items));
    },

    remove (index) {
        /* Remove one element at the given index from the array */
        this.items.splice(index, 1);
        /* Save new items array to local storage */
        this.save();
    }
};


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
                    addElement={this.addElement}
                />
                <ElementsList
                    elements={this.state.elements} /* Pass all of the data + functions as props */
                    deleteElement={this.deleteElement}
                />
            </div>
        );
    }
}

export default App;
