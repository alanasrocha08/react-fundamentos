import Artigo from "../Artigo/artigo";
import estilos from "../Conteudo/Conteudo.module.css";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use temple string (aspas ``) */}
      <section className={`${estilos.arredondada} ${estilos.sombra}`}>
        <h2>Seja bem-vindo(a) aos Fundamentos de React!</h2>
        <p>Esre é um exemplo de aplicação React.</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>
    </main>
  );
}
