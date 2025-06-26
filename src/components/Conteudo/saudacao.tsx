/* Declara um tipo que será usado pelas props do s */
type SaudacaoProps = {
  nome: string;
  classe: string;
};

export default function saudacao({ nome, classe }: SaudacaoProps) {
  return (
    <>
      <h2 className="font-bold text-lg">
        Seja bem-vindo(a) aos Fundamentos de React!
      </h2>
      <p className={`my-2 rounded text-center ${classe}`}>
        Bem-vindo(a) <b>{nome}</b>
      </p>
    </>
  );
}
