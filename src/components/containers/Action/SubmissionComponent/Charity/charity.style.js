import styled from "styled-components";

export const Background = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-left: ${({ isHeader }) => !isHeader && "5px solid var(--color-main)"};
  border-radius: 5px;

  margin-bottom: 1rem;

  -webkit-box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);
  -moz-box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);
  box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);

  p {
    font-size: 1rem;

    width: 17.5rem;

    text-align: center;

    margin: 0.75rem 0;
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
