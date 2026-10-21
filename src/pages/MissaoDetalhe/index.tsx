import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { buscarMissao } from '../../services/api'
import type { Missao } from '../../types'

const ICONES: Record<Missao['categoria'], string> = {
  SUSTENTABILIDADE: '♻️',
  ENGAJAMENTO: '⭐',
  MOBILIDADE: '🚌',
}

export default function MissaoDetalhe() {
  const { id } = useParams()
  const [missao, setMissao] = useState<Missao | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    buscarMissao(Number(id))
      .then(setMissao)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [id])

  if (carregando) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <p className="text-slate-500">
          Carregando missão... (a primeira vez pode levar até 1 minuto)
        </p>
      </div>
    )
  }

  if (erro || !missao) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <p className="text-slate-600 mb-4">{erro || 'Missão não encontrada.'}</p>
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
        <span className="text-4xl">{ICONES[missao.categoria]}</span>
        <h1 className="text-2xl font-bold mt-3 mb-4">{missao.titulo}</h1>
        <p className="text-slate-600 mb-6">{missao.descricao}</p>
        <div className="flex flex-wrap gap-3">
          <strong className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-2 rounded-full">
            Recompensa: {missao.pontos} EcoCoins
          </strong>
          <span className="inline-block bg-slate-100 text-slate-600 text-sm px-4 py-2 rounded-full">
            {missao.status === 'CONCLUIDA' ? 'Concluída' : 'Disponível'}
          </span>
        </div>
      </div>
    </div>
  )
}