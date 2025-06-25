import styled from "styled-components";

const StyledDicaDoDia = styled.section`
  background-color: lightgreen;
  border-left: 5px solid darkgreen;
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
