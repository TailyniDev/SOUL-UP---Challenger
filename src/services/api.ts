import type { ErroApi, Missao } from '../types'

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

export const listarMissoes = () => requisicao<Missao[]>('/missoes')
