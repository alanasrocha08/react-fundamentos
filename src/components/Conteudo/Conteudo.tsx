import Artigo from "../Artigo/artigo";

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Seja bem-vindo(a) aos Fundamentos de React!</h2>
        <p>Esre é um exemplo de aplicação React.</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>
    </main>
  );
}
