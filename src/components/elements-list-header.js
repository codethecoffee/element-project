import React, { Component } from "react";
import { Title, Message } from "../styles";

const ElementsListHeader = props => {
  return (
    <Title>
      <center>
        Element Symbol Generator
        <Message>
          Type in a name for an imaginary element, and I'll generate a symbol
          for you!
        </Message>
      </center>
    </Title>
  );
};

export default ElementsListHeader;
