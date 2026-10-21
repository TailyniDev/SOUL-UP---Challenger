import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { listarMissoes } from '../../services/api'
import type { Missao } from '../../types'

const ICONES: Record<Missao['categoria'], string> = {
  SUSTENTABILIDADE: '♻️',
  ENGAJAMENTO: '⭐',
  MOBILIDADE: '🚌',
}

export default function Missoes() {
  const [missoes, setMissoes] = useState<Missao[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    listarMissoes()
      .then(setMissoes)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [])

  return (
    <>
      <section className="bg-slate-900 text-center py-20 px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Sua ação sustentável vira passagem
        </h1>
        <p className="text-slate-300 max-w-lg mx-auto">
          Complete missões diárias, acumule EcoCoins e troque por créditos
          reais para usar no metrô, ônibus ou trem.
        </p>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">📋 Missões de hoje</h2>
            <p className="text-sm text-slate-600">
              Complete e ganhe dinheiro real para sua mobilidade
            </p>
          </div>

          {carregando && (
            <p className="text-center text-slate-500 mb-6">
              Carregando missões... (a primeira vez pode levar até 1 minuto)
            </p>
          )}

          {erro && <p className="text-center text-red-500 mb-6">{erro}</p>}

          {!carregando && !erro && missoes.length === 0 && (
            <p className="text-center text-slate-500 mb-6">
              Nenhuma missão cadastrada.
            </p>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {missoes.map((missao) => (
              <div
                key={missao.idMissao}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col"
              >
                <span className="text-3xl mb-3">{ICONES[missao.categoria]}</span>
                <h3 className="font-semibold mb-2">{missao.titulo}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-1">
                  {missao.descricao}
                </p>
                <strong className="text-emerald-600 text-lg mb-4">
                  {missao.pontos} EcoCoins
                </strong>
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to={`/missoes/${missao.idMissao}`}
                    className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}