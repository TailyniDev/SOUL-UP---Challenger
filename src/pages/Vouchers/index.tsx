import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { buscarUsuarioPorCpf, gerarVoucher, listarVouchers } from '../../services/api'
import { lerSessao, salvarSessao } from '../../services/sessao'
import type { Voucher } from '../../types'

const CUSTO_EM_PONTOS = 50

function formatarData(iso: string) {
  return iso.split('-').reverse().join('/')
}

function formatarValor(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Vouchers() {
  const [usuario, setUsuario] = useState(lerSessao)
  const [vouchers, setVouchers] = useState<Voucher[]>([])
  const [carregando, setCarregando] = useState(Boolean(usuario))
  const [gerando, setGerando] = useState(false)
  const [erro, setErro] = useState('')
  const [aviso, setAviso] = useState('')

  const cpf = usuario?.cpf

  useEffect(() => {
    if (!cpf) return
    listarVouchers(cpf)
      .then(setVouchers)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false))
  }, [cpf])

  async function gerar() {
    if (!cpf) return
    setErro('')
    setAviso('')
    setGerando(true)
    try {
      const novo = await gerarVoucher({ cpfUsuario: cpf })
      setVouchers((atuais) => [...atuais, novo])
      // A API desconta os pontos; buscamos o usuário de novo para atualizar o saldo
      const atualizado = await buscarUsuarioPorCpf(cpf)
      salvarSessao(atualizado)
      setUsuario(atualizado)
      setAviso(`Voucher ${novo.codigo} gerado! Seu saldo agora é ${atualizado.pontos} EcoCoins.`)
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
        state={{ mensagem: 'Faça login para ver e gerar seus vouchers.' }}
      />
    )
  }

  return (
    <>
      <section className="bg-slate-900 text-center py-20 px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Troque EcoCoins por passagem</h1>
        <p className="text-slate-300 max-w-lg mx-auto">
          Cada voucher custa {CUSTO_EM_PONTOS} EcoCoins e vale uma passagem de
          transporte público.
        </p>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">🎟️ Meus vouchers</h2>
            <p className="text-sm text-slate-600 mb-6">
              Olá, <strong>{usuario.nome}</strong> · Saldo:{' '}
              <strong className="text-emerald-600">{usuario.pontos} EcoCoins</strong>
            </p>
            <button
              type="button"
              onClick={gerar}
              disabled={gerando}
              className="bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-60"
            >
              {gerando ? 'Gerando...' : `Gerar voucher (${CUSTO_EM_PONTOS} EcoCoins)`}
            </button>
          </div>

          {carregando && (
            <p className="text-center text-slate-500 mb-6">
              Carregando vouchers... (a primeira vez pode levar até 1 minuto)
            </p>
          )}
          {erro && <p className="text-center text-red-500 mb-6">{erro}</p>}
          {aviso && <p className="text-center text-emerald-700 mb-6">{aviso}</p>}

          {!carregando && !erro && vouchers.length === 0 && (
            <p className="text-center text-slate-500 mb-6">
              Você ainda não tem vouchers. Complete missões para juntar EcoCoins!
            </p>
          )}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {vouchers.map((voucher) => {
              const utilizado = voucher.status === 'UTILIZADO'
              return (
                <div
                  key={voucher.idVoucher}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col"
                >
                  <span className="text-3xl mb-3">🚇</span>
                  <h3 className="font-semibold mb-1">{voucher.tipoBeneficio}</h3>
                  <p className="text-sm text-slate-500 mb-4">Código: {voucher.codigo}</p>
                  <strong className="text-emerald-600 text-lg mb-2">
                    {formatarValor(voucher.valor)}
                  </strong>
                  <p className="text-sm text-slate-600 mb-4 flex-1">
                    Válido até {formatarData(voucher.validade)}
                  </p>
                  <span
                    className={`self-start text-sm font-medium px-3 py-1 rounded-full ${
                      utilizado
                        ? 'text-slate-600 bg-slate-100'
                        : 'text-emerald-700 bg-emerald-100'
                    }`}
                  >
                    {utilizado ? 'Utilizado' : 'Disponível'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}