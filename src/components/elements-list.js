import React, { Component } from "react";
import ElementsListItem from "./elements-list-item";
import { Grid } from 'grid-styled';
import { Message } from "../styles";

class ElementsList extends Component {
    renderElements () {
        return this.props.elements.map((element, index) => {
            return (
                <Grid p={1}>
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
            return (
              <Message>
                <center>You haven't created any elements yet!</center>
              </Message>
            );
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
