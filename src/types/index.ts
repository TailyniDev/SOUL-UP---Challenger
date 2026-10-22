export type Categoria = 'SUSTENTABILIDADE' | 'ENGAJAMENTO' | 'MOBILIDADE'
export type StatusMissao = 'DISPONIVEL' | 'CONCLUIDA'

export interface Missao {
    idMissao: number
    titulo: string
    descricao: string
    pontos: number
    categoria: Categoria
    status: StatusMissao
    cpfUsuario: string
}

export interface ErroApi {
    status: number
    erro: string
    mensagem: string
}

export type NovaMissao = Omit<Missao, 'idMissao' | 'status'>

export interface ConclusaoMissao {
    missao: Missao
    pontosUsuario: number
}