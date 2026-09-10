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
    <div>
      <h1>Sua ação sustentável vira passagem</h1>
      <p>Complete missões diárias, acumule EcoCoins e troque por créditos reais para usar no metrô, ônibus ou trem.</p>

      <div>
        <span>💰</span>
        <span>Seu Saldo</span>
        <strong>R$ {saldo.toFixed(2)}</strong>
      </div>

      <h2>📋 Missões de hoje</h2>
      <p>Complete e ganhe dinheiro real para sua mobilidade</p>

      <div>
        {missoes.map((missao) => (
          <div key={missao.id}>
            <span>{missao.icone}</span>
            <h3>{missao.titulo}</h3>
            <p>{missao.descricao}</p>
            <strong>{missao.recompensa}</strong>
            <button onClick={() => completarMissao(missao.recompensa)}>Completar</button>
            <Link to={`/missoes/${missao.id}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}