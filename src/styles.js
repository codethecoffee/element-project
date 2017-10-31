import styled from "styled-components";

export const Title = styled.p`
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 4rem;
`;

export const Message = styled.p`
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  margin: 0.5rem;
  color: #011f4b;
  font-size: 2rem;
  font-weight: lighter;
  border: 2px solid #005b96;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: lighter;
  border: 2px solid #005b96;
  padding: 1rem;
  background-color: white;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: #011f4b;
    color: white;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const ElementContainer = styled.div`
  border: 5px solid #005b96;
  height: 200px;
  width: 190px;
  padding-top: 20px;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 90%;
  position: relative;
`;

export const Acronym = styled.div`
  font-size: 7.5rem;
  font-weight: lighter;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ElementName = styled.div`
  padding-left: 10px;
  font-size: 150%;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const DeleteButton = styled.button`
  border-style: none;
  height: 18px;
  width: 20px;
  font-size: 0.8rem;
  font-weight: lighter;
  background-color: white;
  padding: 5px;
  position: absolute;
  top: 2px;
  right: 2px;

  &:hover {
    cursor: pointer;
    color: #b3cde0;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
