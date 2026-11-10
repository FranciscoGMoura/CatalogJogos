import Button from "../components/Button";

function Contato() {
  return (
    <section>
      <h2>Contato</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Mensagem enviada!");
        }}
      >
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <Button texto="Enviar" />
      </form>
    </section>
  );
}

export default Contato;