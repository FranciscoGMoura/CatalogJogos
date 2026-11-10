import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h2>404 - Página não encontrada</h2>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}

export default NotFound;