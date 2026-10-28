import { useState, useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { concluirMissao, criarMissoesIniciais, listarMissoes } from '../../services/api'
import { encerrarSessao, lerSessao, salvarSessao } from '../../services/sessao'
import Carregando from '../../components/Carregando'
import MensagemErro from '../../components/MensagemErro'
import MensagemVazia from '../../components/MensagemVazia'
import type { Missao } from '../../types'

const ICONES: Record<Missao['categoria'], string> = {
  SUSTENTABILIDADE: '♻️',
  ENGAJAMENTO: '⭐',
  MOBILIDADE: '🚌',
}

export default function Missoes() {
  const [usuario, setUsuario] = useState(lerSessao)
  const [missoes, setMissoes] = useState<Missao[]>([])
  const [carregando, setCarregando] = useState(Boolean(usuario))
  const [erro, setErro] = useState('')
  const [aviso, setAviso] = useState('')
  const [concluindoId, setConcluindoId] = useState<number | null>(null)
  const [gerando, setGerando] = useState(false)

  const navigate = useNavigate()
  const mensagemRota = (useLocation().state as { mensagem?: string } | null)?.mensagem
  const cpf = usuario?.cpf

  useEffect(() => {
    if (!cpf) return
    listarMissoes(cpf)
      .then(setMissoes)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [cpf])

  function sair() {
    encerrarSessao()
    navigate('/login', { state: { mensagem: 'Você saiu da sua conta.' } })
  }

  async function concluir(missao: Missao) {
    if (!usuario) return
    setErro('')
    setAviso('')
    setConcluindoId(missao.idMissao)
    try {
      const resultado = await concluirMissao(missao.idMissao)
      setMissoes((atuais) =>
        atuais.map((m) => (m.idMissao === missao.idMissao ? resultado.missao : m)),
      )
      const atualizado = { ...usuario, pontos: resultado.pontosUsuario }
      salvarSessao(atualizado)
      setUsuario(atualizado)
      setAviso(`+${missao.pontos} EcoCoins! Seu saldo agora é ${resultado.pontosUsuario}.`)
    } catch (e) {
      setErro((e as Error).message)
    } finally {
      setConcluindoId(null)
    }
  }

  async function gerarMissoes() {
    if (!cpf) return
    setErro('')
    setGerando(true)
    try {
      await criarMissoesIniciais(cpf)
      setMissoes(await listarMissoes(cpf))
    } catch (e) {
      setErro((e as Error).message)
    } finally {
      setGerando(false)
    }
  }

  if (!usuario) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ mensagem: 'Faça login para ver e completar suas missões.' }}
      />
    )
  }

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
              Olá, <strong>{usuario.nome}</strong> · Saldo:{' '}
              <strong className="text-emerald-600">{usuario.pontos} EcoCoins</strong>{' · '}
              <button
                type="button"
                onClick={sair}
                className="text-slate-500 underline hover:text-slate-700"
              >
                Sair
              </button>
            </p>
          </div>

          {carregando && (
            <Carregando texto="Carregando missões... (a primeira vez pode levar até 1 minuto)" />
          )}

          {mensagemRota && <p className="text-center text-amber-700 mb-6">{mensagemRota}</p>}
          {erro && <MensagemErro mensagem={erro} />}
          {aviso && <p className="text-center text-emerald-700 mb-6">{aviso}</p>}

          {!carregando && !erro && missoes.length === 0 && (
            <MensagemVazia texto="Você ainda não tem missões.">
              <button
                type="button"
                onClick={gerarMissoes}
                disabled={gerando}
                className="bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-60"
              >
                {gerando ? 'Gerando...' : 'Gerar missões do dia'}
              </button>
            </MensagemVazia>
          )}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {missoes.map((missao) => {
              const concluida = missao.status === 'CONCLUIDA'
              return (
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
                    {concluida ? (
                      <span className="text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        ✓ Concluída
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => concluir(missao)}
                        disabled={concluindoId === missao.idMissao}
                        className="text-sm font-semibold bg-emerald-600 text-white px-4 py-1.5 rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-60"
                      >
                        {concluindoId === missao.idMissao ? 'Salvando...' : 'Completar'}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}