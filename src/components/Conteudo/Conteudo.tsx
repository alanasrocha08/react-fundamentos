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

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
