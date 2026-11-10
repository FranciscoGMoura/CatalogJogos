function Button({ texto, onClick }: { texto: string; onClick?: () => void }) {
  return (
    <button className="btn" onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;