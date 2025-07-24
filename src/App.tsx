import { Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";

export default function App() {
  return (
    <>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Rodape />
    </>
  );
}
