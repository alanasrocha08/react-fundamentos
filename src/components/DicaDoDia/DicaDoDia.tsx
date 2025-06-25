import styled from "styled-components";

const StyledDicaDoDia = styled.section`
  background-color: lightgreen;
  border-left: 5px solid darkgreen;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: darkgreen;
  }

  p {
    color: green;
    font-size: 1.4rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;

    a {
      text-decoration: none;
      color: darkgreen;
      font-weight: bold;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

export default function DicaDoDia() {
  return (
    <StyledDicaDoDia>
      <section>
        <h3>Dica Do Dia </h3>
        <p>
          Você pode combinar diferentes formas de estilização em um projeto
          React. Neste exemplo, estamos usando <b>styled-components</b>, uma
          famosa biblioteca para CSS In JS.
        </p>
        <p>
          Site oficial:{" "}
          <a href="https://styled-components.com/" target="_blank">
            Styles Components
          </a>
        </p>
      </section>
    </StyledDicaDoDia>
  );
}
