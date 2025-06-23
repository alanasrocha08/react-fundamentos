/* Tudo o que dor usado dentro de componentes (imagens, fontes etc), deve ser importado. Desta forma, no momento do build, haverá otimizações para este conteúdo. */
export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" />
        Olá react!😊
      </h1>
      <hr />
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
      </nav>
    </header>
  );
}
