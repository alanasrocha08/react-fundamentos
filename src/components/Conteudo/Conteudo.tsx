import Artigo from "./Artigo/artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import estilos from "./Conteudo.module.css";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import Saudacao from "./saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use temple string (aspas ``) */}
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <Saudacao nome="Alana" classe="bg-emerald-100" />
        <Saudacao classe="bg-blue-100" />

        <p>Esse é um exemplo de aplicação React.</p>

        <Artigo titulo="Front-End" numero={1} data={new Date()}>
          <p>Front-End é muito legal, a gente usa HTML com CSS e JavaScript</p>
          <p>Mas também dá muita dor de cabeça quando usa CSS...</p>
        </Artigo>

        <Artigo titulo="Back-End" numero={2}>
          <p>Importante estudar:</p>
          <ul>
            <li>PHP</li>
            <li>SQL</li>
            <li>Orientação a Objetos</li>
          </ul>
          <p>E muito mais!</p>
        </Artigo>

        <Artigo titulo="Mobile" numero={3}>
          <details>
            <summary>Conheça as tecnologias mais usadas</summary>
            <ol className="*:list-decimal *ml-7">
              <li>JavaScriot/TypeScript</li>
              <li>Libs e Frameworks</li>
            </ol>
          </details>
        </Artigo>
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
