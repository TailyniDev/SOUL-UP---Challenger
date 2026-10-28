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

export type StatusUsuario = 'ATIVO' | 'INATIVO'

export interface Usuario {
    idUsuario: number
    nome: string
    cpf: string
    email: string
    pontos: number
    status: StatusUsuario
}

// Intersection types: combinam campos do Usuario com a senha, que a API só recebe
export type NovoUsuario = Pick<Usuario, 'nome' | 'cpf' | 'email'> & { senha: string }
export type Credenciais = Pick<Usuario, 'cpf'> & { senha: string }

// Omit remove o que a API gera sozinha (id e status) ao cadastrar uma missão
export type NovaMissao = Omit<Missao, 'idMissao' | 'status'>

export interface ConclusaoMissao {
    missao: Missao
    pontosUsuario: number
}

export type StatusVoucher = 'DISPONIVEL' | 'UTILIZADO'

export interface Voucher {
    idVoucher: number
    codigo: string
    cpfUsuario: string
    tipoBeneficio: string
    valor: number
    status: StatusVoucher
    validade: string
}

// O tipo de benefício é opcional: a API usa "passagem de metrô gratuita" como padrão
export type NovoVoucher = Pick<Voucher, 'cpfUsuario'> & { tipoBeneficio?: string }
