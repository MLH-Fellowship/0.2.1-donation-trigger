import styled from "styled-components";

export const Background = styled.div`
  margin-top: 2rem;
  text-align: center;

  background-color: var(--color-main);

  height: 19rem;
  width: 100%;

  border-radius: 8px;

  h1 {
    font-family: "Prata", serif;
    font-size: 3rem;

    padding: 1.5rem 0 0.75rem 0;
  }

  p {
    font-size: 1.5rem;

    margin-bottom: 1.2rem;
  }

  button {
    background-color: #1da1f2;
    border: none;
    border-radius: 5px;

    font-size: 1.2rem;
    color: white;

    cursor: pointer;

    padding: 0.5rem 1.5rem;
  }
`;

export const TextContainer = styled.div`
  display: inline-block;
  padding: 2rem;

  margin-top: 8rem;

  border-radius: 5px;

  background-color: white;

  -webkit-box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);
  -moz-box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);
  box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);

  h1 {
    margin-bottom: 0.5rem;
  }
`;
