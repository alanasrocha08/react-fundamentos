// Ajuda a destectar uso de recursos obsoletos (APIS, funções, padrões etc)
import { StrictMode } from "react";

// Usado para cria a 'raiz' da aplicação React a partir de um elemento HTML
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação.
// O componente App é o ponto de entrada da aplicação React
import App from "./App.tsx";

// Seleciona o elemto HTML root, cria raíz da aplicação e renderiza o componente App.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
