import { MISSOES_INICIAIS } from '../data/missoes'
import type {
    ConclusaoMissao,
    Credenciais,
    ErroApi,
    Missao,
    NovaMissao,
    NovoUsuario,
    NovoVoucher,
    Usuario,
    Voucher,
} from '../types'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'https://rocket-api-0me7.onrender.com'

async function requisicao<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
    const resposta = await fetch(`${BASE_URL}${caminho}`, {
        headers: { 'Content-Type': 'application/json' },
        ...opcoes,
    })
    if (!resposta.ok) {
        const erro: ErroApi | null = await resposta.json().catch(() => null)
        throw new Error(erro?.mensagem ?? 'Erro ao acessar a API.')
    }
    return resposta.status === 204 ? (undefined as T) : resposta.json()
}

export const listarMissoes = (cpf?: string) =>
    requisicao<Missao[]>(cpf ? `/missoes?cpf=${encodeURIComponent(cpf)}` : '/missoes')
export const buscarMissao = (id: number) => requisicao<Missao>(`/missoes/${id}`)

export const cadastrarUsuario = (dados: NovoUsuario) =>
    requisicao<Usuario>('/usuarios', { method: 'POST', body: JSON.stringify(dados) })

export const login = (credenciais: Credenciais) =>
    requisicao<Usuario>('/usuarios/login', { method: 'POST', body: JSON.stringify(credenciais) })

export const cadastrarMissao = (dados: NovaMissao) =>
    requisicao<Missao>('/missoes', { method: 'POST', body: JSON.stringify(dados) })

export const concluirMissao = (id: number) =>
    requisicao<ConclusaoMissao>(`/missoes/${id}/concluir`, { method: 'PATCH' })

export const listarVouchers = (cpf?: string) =>
    requisicao<Voucher[]>(cpf ? `/vouchers?cpf=${encodeURIComponent(cpf)}` : '/vouchers')

export const gerarVoucher = (dados: NovoVoucher) =>
    requisicao<Voucher>('/vouchers', { method: 'POST', body: JSON.stringify(dados) })

// Usado para atualizar o saldo do usuário depois de gerar um voucher
export const buscarUsuarioPorCpf = (cpf: string) =>
    requisicao<Usuario>(`/usuarios/cpf/${encodeURIComponent(cpf)}`)

// A API cadastra uma missão por vez, então criamos as missões do dia em sequência
export async function criarMissoesIniciais(cpf: string) {
    for (const missao of MISSOES_INICIAIS) {
        await cadastrarMissao({ ...missao, cpfUsuario: cpf })
    }
}