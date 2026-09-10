export default function Contato() {
  return (
    <div>
      <h1>📬 Fale Conosco</h1>

      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea rows={5} placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
}