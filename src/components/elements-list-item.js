import React, { Component } from "react";

export default class ElementsListItem extends Component {
    renderTask () {
        console.log("The element: ", this.props.element)
        return (
            <td>
              {this.props.element}
            </td>
        );
    }

    render () {
        return (
            <tr>
                {this.renderTask()}
                <td>
                  <button onClick={this.deleteElement.bind(this)}>Delete</button>
                </td>
            </tr>
        )
    }

    deleteElement () {
        this.props.deleteElement(this.props.index);
    }
}
