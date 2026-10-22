import type { Usuario } from '../types'

const CHAVE = 'soulup:usuario'

export function salvarSessao(usuario: Usuario) {
  localStorage.setItem(CHAVE, JSON.stringify(usuario))
}

export function lerSessao(): Usuario | null {
  const salvo = localStorage.getItem(CHAVE)
  return salvo ? (JSON.parse(salvo) as Usuario) : null
}

export function encerrarSessao() {
  localStorage.removeItem(CHAVE)
}