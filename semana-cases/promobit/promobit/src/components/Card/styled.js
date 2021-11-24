import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 1.5rem;
  width: 400px;
  border-radius: 15px;
  background-color: #e50914;
  box-shadow: 2px 2px 5px #bebebe;
  img {
      width: 100%;
      height: auto;
  }
  button {
    cursor: pointer;
    box-shadow: 2px 2px 5px #bebebe;
    border-radius: 5px;
  } .btn:focus{
    background: red;
  }
  h3 {
    font-family: 'Dosis', sans-serif;
    color: whitesmoke;
    text-shadow: 0.1em 0.1em 0.2em black
  }
`