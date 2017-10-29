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

    add (element) {
        /* Add element to the array */
        this.items.push(element);
        /* Save new items array to local storage */
        this.save();
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

        /* Start off by retrieving local data */
        elements.populate();

        this.state = {
            elements: elements.items
        };
    }

    addElement (element) {

      /* Remove whitespace from both sides of the string for clean result */
      element = element.trim();
      if (!element) { return; }
      elements.add({
          element
      });
      this.setState({ elements: this.state.elements });
    }

    deleteElement (elementId) {
        elements.remove(elementId);
        this.setState({ elements: this.state.elements });
    }

    render () {
        return (
            <div>
                <ElementsListHeader />
                <CreateElement
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
