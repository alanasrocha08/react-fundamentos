import Artigo from "./Artigo/artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import estilos from "./Conteudo.module.css";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import Saudacao from "./saudacao";
import cursos from "../../Data/cursos";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use temple string (aspas ``) */}
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <Saudacao nome="Alana" classe="bg-emerald-100" />

        <p>Esse é um exemplo de aplicação React.</p>

        {/* Faça a lógica necessária para apresentar o componente Artigo e passar para ele os dados de cada curso proveniente de cursos. */}
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
