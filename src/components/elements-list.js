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
            return (<p>You don't have any elements! Add some.</p>);
        }
        return (
          <div>
            <center>
              <table>
                  <tbody>
                      {this.renderElements()}
                  </tbody>
              </table>
            </center>
          </div>
        )
    }
}

export default ElementsList;
