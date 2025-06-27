import Artigo from "./Artigo/artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import estilos from "./Conteudo.module.css";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import Saudacao from "./saudacao";
import cursos from "../../Data/cursos";
import ListaCursos from "../ListaCursos/ListaCursos";

export default function Conteudo() {
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];
  console.log(categorias);

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <Saudacao nome="Alana" classe="bg-emerald-100" />

        <p>Esse é um exemplo de aplicação React.</p>

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
