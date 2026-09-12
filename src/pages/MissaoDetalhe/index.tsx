import { Link, useParams } from "react-router"
import { missoes } from '../../data/missoes'

export default function MissaoDetalhe() {
  const { id } = useParams()
  const missao = missoes.find((m) => m.id === Number(id))

  if (!missao) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <p className="text-slate-600 mb-4">Missão não encontrada.</p>
        <Link
          to="/missoes"
          className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
        >
          ← Voltar para Missões
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Link
        to="/missoes"
        className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
      >
        ← Voltar para Missões
      </Link>

      <div className="bg-white border border-slate-200 rounded-xl p-8 mt-6">
        <h1 className="text-2xl font-bold mb-4">{missao.titulo}</h1>
        <p className="text-slate-600 mb-6">{missao.descricao}</p>
        <strong className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-2 rounded-full">
          Recompensa: {missao.recompensa}
        </strong>
      </div>
    </div>
  )
}