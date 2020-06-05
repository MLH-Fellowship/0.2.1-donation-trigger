import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;

  p {
    font-size: 1.5rem;

    margin-bottom: 1.2rem;
  }

  button {
    background-color: var(--color-main);
    border: none;
    border-radius: 5px;

    font-size: 1.2rem;
    font-weight: 500;
    color: black;

    cursor: pointer;

    padding: 0.5rem 1.5rem;
    margin: 0.5rem;
  }

  input[type="text"],
  select {
    width: 15rem;
    padding: 0.1rem 0.2rem;
    margin: 0.2rem 0.1rem;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Submit = styled.div`
  background-color: #1da1f2;
  border: none;
  border-radius: 5px;

  font-size: 1.2rem;
  color: white;

  cursor: pointer;

  padding: 0.25rem 0.75rem;
`;
