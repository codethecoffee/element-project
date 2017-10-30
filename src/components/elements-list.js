import React, { Component } from "react";
import ElementsListItem from "./elements-list-item";
import { Grid } from 'grid-styled'


class ElementsList extends Component {
    renderElements () {
        return this.props.elements.map((element, index) => {
            return (
                <Grid>
                <center>
                  <ElementsListItem
                      key={index}
                      index={index}
                      {...element}
                      deleteElement={this.props.deleteElement}
                  />
                </center>
                </Grid>
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
                {this.renderElements()}
            </center>
          </div>
        )
    }
}

export default ElementsList;
