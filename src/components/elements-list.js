import React, { Component } from "react";
import ElementsListItem from "./elements-list-item";
import { Grid } from "grid-styled";
import { Message } from "../styles";

const ElementsList = (props) => {

    if (!props.elements.length) {
      return (
        <Message>
          <center>You haven't created any elements yet!</center>
        </Message>
      );
    }
    return (
      <div>
        <center>
          {props.elements.map((element, index) => {
            return (
              <Grid p={1}>
                <center>
                  <ElementsListItem
                    key={index}
                    index={index}
                    element={element}
                    deleteElement={props.deleteElement}
                  />
                </center>
              </Grid>
            );
          })}
        </center>
      </div>
    );
}

export default ElementsList;
