import styled from "styled-components";

export const Background = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  border-radius: 1rem;

  p {
    font-size: 1rem;

    width: 17.5rem;

    text-align: center;

    margin: .75rem 0;
  }

  button {
    background-color: #1da1f2;
    border: none;
    border-radius: 5px;

    font-size: 1rem;
    color: white;

    cursor: pointer;

    padding: 0.5rem 1.5rem;
  }
`;
