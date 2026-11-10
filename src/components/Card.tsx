interface CardProps {
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
}

function Card({ titulo, descricao, categoria, imagem }: CardProps) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <span>{categoria}</span>
    </div>
  );
}

export default Card;