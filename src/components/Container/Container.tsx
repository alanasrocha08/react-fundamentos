import type { ReactNode } from "react";
import estilos from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
};

/* Sempre que vcê quiser que o componente (Container aceite conteúdo JSX dentro dele, p tipo para a prop children é ReactNode, que cobre qualquer coisa rederizável no JSX (elementos, texto etc) */
export default function Container({ children }: ContainerProps) {
  return <main className={estilos.container}>{children}</main>;
}
