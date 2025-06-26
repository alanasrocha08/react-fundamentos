/* Declara um tipo que será usado pelas props do s */
type Props = {
  nome: string;
};

export default function saudacao(props: Props) {
  return (
    <h2 className="font-bold text-lg">
      Seja bem-vindo(a) aos Fundamentos de React!
    </h2>
  );
}
