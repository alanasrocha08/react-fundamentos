import estilos from "./ListaCursos.module.css";
import Artigo from "../Conteudo/Artigo/artigo";
import cursos from "../../Data/cursos";

export default function ListaCursos() {
  return (
    <div className={estilos.artigos}>
      {cursos.map((curso) => {
        return <Artigo dados={curso} key={curso.id} />;
      })}
    </div>
  );
}
