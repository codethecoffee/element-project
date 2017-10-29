import React, { Component } from "react";
import ElementsListItem from "./elements-list-item";

class ElementsList extends Component {
    renderElements () {
        return this.props.elements.map((element, index) => {
            return (
              <div>
                <ElementsListItem
                    key={index}
                    index={index}
                    {...element}
                    deleteElement={this.props.deleteElement}
                />
              </div>
            )
        });
    }

    render () {
        if (!this.props.elements.length) {
            return (<p>My Elements: {" " + this.props.elements.length}</p>);
        }
        return (
          <div>
            <p>My Elements: {" " + this.props.elements.length}</p>
            <table>
                <tbody>
                    {this.renderElements()}
                </tbody>
            </table>
          </div>
        )
    }
}

export default ElementsList;
