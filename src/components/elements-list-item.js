import React, { Component } from "react";
import {
  ElementContainer,
  DeleteButton,
  ElementName,
  Acronym
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

    generateAcronym() {
      const acronym = this.props.element.substring(0,2);
      return acronym;

    }

    render () {
        return (
            <tr>
              <ElementContainer>
                <center>
                <Acronym>
                    {this.generateAcronym()}
                </Acronym>
                <ElementName>
                    {this.renderElement()}
                </ElementName>
              </center>
                  <DeleteButton onClick={this.deleteElement.bind(this)}>X</DeleteButton>
              </ElementContainer>
            </tr>
        )
    }

    deleteElement () {
        this.props.deleteElement(this.props.index);
    }
}
