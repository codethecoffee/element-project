import styled from 'styled-components';

export const Title = styled.p`
  font-family: sans-serif;
	font-weight: lighter;
  font-size: 4rem;
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

`;

export const ElementCounter = styled.p`
  font-family: sans-serif;
	font-weight: lighter;
  font-size: 1.5rem;
`;

export const ElementContainer = styled.div`
  border: 2px solid #005b96;
  height: 200px;
  width: 200px;
  padding-top: 20px;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 90%;
  position: relative;
`;

export const ElementName = styled.span`
  padding-left: 10px;
  font-size: 150%;
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
  top: 0px;
  right: 0px;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
