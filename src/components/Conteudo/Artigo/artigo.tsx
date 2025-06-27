import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;

  const [cor, setCor] = useState("aliceblue");

  const selecionar = () => {
    setCor((valor) => {
      return valor === "aliceblue" ? "lightblue" : "aliceblue";
    });
  };

  return (
    <article
      onClick={selecionar}
      className={estilos.artigo}
      style={{ backgroundColor: cor }}
    >
      <h3> {titulo}</h3>
      <p>
        <b>Categoria:</b> {categoria}
      </p>
      <p>
        <b>Preço:</b> {preco}
      </p>
    </article>
  );
}
