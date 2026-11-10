import Card from "../components/Card";
import jogos from "../data/jogos";

function Produtos() {
  return (
    <section>
      <h2>Nossos Jogos</h2>
      <div className="lista-cards">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            titulo={jogo.titulo}
            descricao={jogo.descricao}
            categoria={jogo.categoria}
            imagem={jogo.imagem}
          />
        ))}
      </div>
    </section>
  );
}

export default Produtos;