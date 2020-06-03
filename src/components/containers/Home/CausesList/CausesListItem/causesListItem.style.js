import styled from "styled-components";

export const Card = styled.div`
  border-radius: 5px;
  height: 13rem;

  padding: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: white;

  text-align: left;

  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${({ img }) => img}) center/cover no-repeat;

  -webkit-box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);
  -moz-box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);
  box-shadow: 0px 5px 30px -7px rgba(173, 173, 173, 0.54);

  h2 {
    margin-bottom: 0.5rem;
  }

  a {
    background-color: var(--color-main);

    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;

    color: black;

    padding: 0.5rem 1.2rem;

    border: none;
    border-radius: 25rem;
    outline: none;
  }
`;

export const Image = styled.div``;
