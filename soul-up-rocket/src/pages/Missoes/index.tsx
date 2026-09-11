import { useState, useEffect } from 'react'
import { missoes } from '../../data/missoes'
import { Link } from 'react-router'

export default function Missoes() {
  const [saldo, setSaldo] = useState(12.5)

  useEffect(() => {
    console.log('Saldo atualizado:', saldo)
  }, [saldo])

  function completarMissao(recompensa: string) {
    const valor = parseFloat(recompensa.replace('R$', '').replace(',', '.'))
    setSaldo(saldo + valor)
  }

  return (
    <>
      <section className="bg-slate-900 text-center py-20 px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Sua ação sustentável vira passagem
        </h1>
        <p className="text-slate-300 max-w-lg mx-auto mb-8">
          Complete missões diárias, acumule EcoCoins e troque por créditos
          reais para usar no metrô, ônibus ou trem.
        </p>

        <div className="inline-flex items-center gap-3 bg-emerald-900 text-white px-6 py-3 rounded-full">
          <span className="text-xl">💰</span>
          <span className="text-sm text-emerald-300">Seu Saldo</span>
          <strong className="text-lg">R$ {saldo.toFixed(2)}</strong>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">📋 Missões de hoje</h2>
            <p className="text-sm text-slate-600">
              Complete e ganhe dinheiro real para sua mobilidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {missoes.map((missao) => (
              <div
                key={missao.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col"
              >
                <span className="text-3xl mb-3">{missao.icone}</span>
                <h3 className="font-semibold mb-2">{missao.titulo}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-1">
                  {missao.descricao}
                </p>
                <strong className="text-emerald-600 text-lg mb-4">
                  {missao.recompensa}
                </strong>
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => completarMissao(missao.recompensa)}
                    className="bg-emerald-600 text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-emerald-700 transition-colors"
                  >
                    Completar
                  </button>
                  <Link
                    to={`/missoes/${missao.id}`}
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