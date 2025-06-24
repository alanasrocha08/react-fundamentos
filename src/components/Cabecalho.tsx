/* Tudo o que dor usado dentro de componentes (imagens, fontes etc), deve ser importado. Desta forma, no momento do build, haverá otimizações para este conteúdo. */
import logo from "../assets/logo.png";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" />
        Olá react!😊
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
