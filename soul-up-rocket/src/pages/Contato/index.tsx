import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroMensagem, setErroMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let temErro = false;

    if (nome === "") {
      setErroNome("Nome é obrigatório");
      temErro = true;
    } else {
      setErroNome("");
    }

    if (email === "") {
      setErroEmail("E-mail é obrigatório");
      temErro = true;
    } else {
      setErroEmail("");
    }

    if (mensagem === "") {
      setErroMensagem("Mensagem é obrigatória");
      temErro = true;
    } else {
      setErroMensagem("");
    }

    if (temErro) {
      return;
    }

    alert("Formulário enviado com sucesso!");
  }
  return (
    <div>
      <h1>📬 Fale Conosco</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        {erroNome && <span>{erroNome}</span>}
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {erroEmail && <span>{erroEmail}</span>}
        <textarea
          rows={5}
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        {erroMensagem && <span>{erroMensagem}</span>}
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
}
