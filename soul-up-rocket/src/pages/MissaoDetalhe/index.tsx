import { Link, useParams } from "react-router"
import { missoes } from '../../data/missoes'

export default function MissaoDetalhe() {
  const { id } = useParams()
  const missao = missoes.find((m) => m.id === Number(id))

  if (!missao) {
    return (
      <div>
        <p>Missão não encontrada.</p>
        <Link to="/missoes">← Voltar para Missões</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/missoes">← Voltar para Missões</Link>
      <h1>{missao.titulo}</h1>
      <p>{missao.descricao}</p>
      <strong>Recompensa: {missao.recompensa}</strong>
    </div>
  )
}