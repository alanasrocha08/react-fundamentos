import { Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import Container from "./components/Container/Container";

export default function App() {
  return (
    <>
      <Cabecalho />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>

      <Rodape />
    </>
  );
}
