import Artigo from "./Artigo/artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import estilos from "./Conteudo.module.css";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import Saudacao from "./saudacao";
import cursos from "../../Data/cursos";
import ListaCursos from "../ListaCursos/ListaCursos";
import { useState } from "react";

export default function Conteudo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <Saudacao nome="Alana" classe="bg-emerald-100" />

        <p>Esse é um exemplo de aplicação React.</p>

        {categorias.map((categoria) => {
          return (
            <button
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mr-1 bg-blue-500 hover:bg-red-500"
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="p-2 border rounded bg-red-400"
            >
              Limpar{" "}
            </button>
            <p>
              Categoria seleceionada: <b>{categoriaAtiva}</b>
            </p>
          </>
        )}
        <ListaCursos categoria={categoriaAtiva} />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
