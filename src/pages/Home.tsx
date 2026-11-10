import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Bem-vindo ao GameVault 🎮</h2>
      <p>Aqui você encontra um catálogo com os melhores jogos.</p>
      <Link to="/produtos">Ver jogos</Link>
    </section>
  );
}

export default Home;