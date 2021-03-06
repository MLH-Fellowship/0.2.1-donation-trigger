import styled from "styled-components";

export const Background = styled.div`
  margin-top: 4rem;
  text-align: center;

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

export const Tag = styled.div`
  display: inline;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;

  padding: 0.5rem 1rem;

  color: #718096;
  background-color: #cbd5e0;
  border-radius: 25rem;
`;
