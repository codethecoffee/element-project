import React, { Component } from "react";
import {
  ElementContainer,
  DeleteButton,
  ElementName
} from "../styles";

export default class ElementsListItem extends Component {
    renderElement () {
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
              <ElementContainer>
                <ElementName>
                  <center>
                    {this.renderElement()}
                  </center>
                </ElementName>
                  <DeleteButton onClick={this.deleteElement.bind(this)}>X</DeleteButton>
              </ElementContainer>
            </tr>
        )
    }

    deleteElement () {
        this.props.deleteElement(this.props.index);
    }
}
