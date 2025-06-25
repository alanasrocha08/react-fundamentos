export default function AvisoImportante() {
  return (
    <section className="bg-yellow-200 border-l-4 border-yellow-700 mp-4 rounded">
      <h3 className="font-bold text-2xl text-orange-800">Aviso Importante:</h3>
      <p>Alguns alunos e alunos estão perigando reprovação nesta UC.</p>

      <div className="flex justify-between my-3 bg-white">
        <div className="bg-green-100">UM</div>
        <div className="bg-blue-100">DOIS</div>
        <div className="bg-red-100">TRÊS</div>
      </div>
    </section>
  );
}
